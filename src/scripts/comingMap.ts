type ColorDictionary = Record<string, string>;

interface ComingMapOptions {
  countryColors: ColorDictionary;
  stateColors: ColorDictionary;
  defaultFillColor: string;
  countryCategories?: Record<string, string>;
  stateCategories?: Record<string, string>;
  defaultCategoryId?: string;
  countryMeta?: Record<string, DestinationMeta>;
  stateMeta?: Record<string, DestinationMeta>;
  categoryLabels?: Record<string, string>;
}

type LocalizedText = Record<string, string>;

interface DestinationMeta {
  categoryId: string;
  names?: LocalizedText;
  explanation?: LocalizedText;
}

declare const maplibregl: any;

const FILTER_ALL = "__all__";
const HIDDEN_COLOR = "#ffffff";
const DEFAULT_LOCALE = "fr";
const LOCALE_FALLBACKS = [DEFAULT_LOCALE, "en"];

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });

function readOptionsFromDataset(): ComingMapOptions | null {
  const mapElement = document.getElementById("map");
  if (!mapElement) return null;

  const {
    countryColors,
    stateColors,
    defaultFillColor,
    countryCategories,
    stateCategories,
    defaultCategoryId,
    countryMeta,
    stateMeta,
    categoryLabels
  } = mapElement.dataset as Record<string, string | undefined>;

  if (!countryColors || !stateColors || !defaultFillColor) return null;

  try {
    return {
      countryColors: JSON.parse(countryColors),
      stateColors: JSON.parse(stateColors),
      defaultFillColor,
      countryCategories: countryCategories ? JSON.parse(countryCategories) : undefined,
      stateCategories: stateCategories ? JSON.parse(stateCategories) : undefined,
      defaultCategoryId,
      countryMeta: countryMeta ? JSON.parse(countryMeta) : undefined,
      stateMeta: stateMeta ? JSON.parse(stateMeta) : undefined,
      categoryLabels: categoryLabels ? JSON.parse(categoryLabels) : undefined
    };
  } catch (error) {
    console.warn(
      "[comingMap] Impossible de parser les données depuis les attributs data-*.",
      error
    );
    return null;
  }
}

export default function initComingMap(passedOptions?: ComingMapOptions) {
  if (typeof window === "undefined") return;

  const options = passedOptions ?? readOptionsFromDataset();
  if (!options) return;

  const {
    countryColors,
    stateColors,
    defaultFillColor,
    countryCategories = {},
    stateCategories = {},
    defaultCategoryId = "",
    countryMeta = {},
    stateMeta = {},
    categoryLabels = {}
  } = options;

  const getCountryCategory = (iso: string) =>
    countryCategories[iso] ??
    countryMeta[iso]?.categoryId ??
    defaultCategoryId;
  const getStateCategory = (code: string) =>
    stateCategories[code] ?? stateMeta[code]?.categoryId ?? defaultCategoryId;

  const pickLocalized = (text: LocalizedText | undefined) => {
    if (!text) return "";
    for (const locale of LOCALE_FALLBACKS) {
      if (text[locale]) return text[locale] ?? "";
    }
    const first = Object.values(text)[0];
    return first ?? "";
  };

  const buildColorExpressionForCountries = (filterCategory: string) => {
    const expr: (string | any[])[] = ["match", ["get", "iso_a3"]];
    for (const iso of Object.keys(countryColors)) {
      const color = countryColors[iso];
      const categoryId = getCountryCategory(iso);
      expr.push(iso);
      expr.push(
        filterCategory === FILTER_ALL || filterCategory === categoryId
          ? color
          : HIDDEN_COLOR
      );
    }
    expr.push(defaultFillColor);
    return expr;
  };

  const buildColorExpressionForStates = (filterCategory: string) => {
    const expr: (string | any[])[] = ["match", ["get", "stusps"]];
    for (const code of Object.keys(stateColors)) {
      const color = stateColors[code];
      const categoryId = getStateCategory(code);
      expr.push(code);
      expr.push(
        filterCategory === FILTER_ALL || filterCategory === categoryId
          ? color
          : HIDDEN_COLOR
      );
    }
    expr.push(defaultFillColor);
    return expr;
  };

  let attempts = 0;
  const MAX_ATTEMPTS = 20;

  const setupMap = () => {
    if (typeof maplibregl === "undefined") {
      if (attempts < MAX_ATTEMPTS) {
        attempts += 1;
        window.setTimeout(setupMap, 100);
      }
      return;
    }

    const popupEl = document.getElementById("hoverPopup");

    const map = new maplibregl.Map({
      container: "map",
      style: {
        version: 8,
        sources: {
          world: {
            type: "geojson",
            data: "/geo/world.geojson"
          },
          usStates: {
            type: "geojson",
            data: "/geo/us_states.geojson"
          }
        },
        layers: [
          {
            id: "world-fill",
            type: "fill",
            source: "world",
            paint: {
              "fill-color": buildColorExpressionForCountries(FILTER_ALL),
              "fill-opacity": 0.9
            }
          },
          {
            id: "world-outline",
            type: "line",
            source: "world",
            paint: {
              "line-color": "#ffffff",
              "line-width": 0.5
            }
          },
          {
            id: "states-fill",
            type: "fill",
            source: "usStates",
            paint: {
              "fill-color": buildColorExpressionForStates(FILTER_ALL),
              "fill-opacity": 0.95
            }
          },
          {
            id: "states-outline",
            type: "line",
            source: "usStates",
            paint: {
              "line-color": "#ffffff",
              "line-width": 0.5
            }
          }
        ]
      },
      center: [0, 20],
      zoom: 1.1,
      minZoom: 1,
      maxZoom: 10
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }));

    const showPopup = (e: any, feature: any) => {
      if (!popupEl || !feature) return;
      const props = feature.properties ?? {};
      const name =
        props.name ||
        props.ADMIN ||
        props.abbrev ||
        props.stusps ||
        "Zone";

      const iso = props.iso_a3 as string | undefined;
      const stateCode = props.stusps as string | undefined;

      let categoryId = defaultCategoryId;
      let explanation = "";
      let displayName = name;

      if (iso && iso !== "USA") {
        const meta = countryMeta[iso];
        if (meta) {
          categoryId = meta.categoryId ?? categoryId;
          const localizedName = pickLocalized(meta.names);
          if (localizedName) displayName = localizedName;
          explanation = pickLocalized(meta.explanation);
        } else {
          categoryId = getCountryCategory(iso);
        }
      } else if (stateCode) {
        const meta = stateMeta[stateCode];
        if (meta) {
          categoryId = meta.categoryId ?? categoryId;
          const localizedName = pickLocalized(meta.names);
          if (localizedName) displayName = localizedName;
          explanation = pickLocalized(meta.explanation);
        } else {
          categoryId = getStateCategory(stateCode);
        }
      }

      const categoryLabel =
        categoryLabels[categoryId] ?? (categoryId ? categoryId : "");

      const escapedName = escapeHtml(displayName);
      const escapedCategory = categoryLabel ? escapeHtml(categoryLabel) : "";
      const escapedExplanation = explanation ? escapeHtml(explanation) : "";

      const firstLine = escapedCategory
        ? `${escapedName} <span aria-hidden="true">•</span> <em>${escapedCategory}</em>`
        : escapedName;
      const html = escapedExplanation
        ? `${firstLine}<br><span class="popup-explanation">${escapedExplanation}</span>`
        : firstLine;

      popupEl.innerHTML = html;
      popupEl.style.left = `${e.point.x}px`;
      popupEl.style.top = `${e.point.y}px`;
      popupEl.style.opacity = "1";
    };

    const hidePopup = () => {
      if (popupEl) popupEl.style.opacity = "0";
    };

    map.on("mousemove", "world-fill", (e: any) => {
      const feature = e.features?.[0];
      if (feature?.properties?.iso_a3 === "USA") {
        hidePopup();
        return;
      }
      showPopup(e, feature);
    });
    map.on("mouseleave", "world-fill", hidePopup);

    map.on("mousemove", "states-fill", (e: any) => {
      const feature = e.features?.[0];
      showPopup(e, feature);
    });
    map.on("mouseleave", "states-fill", hidePopup);

    const select = document.getElementById(
      "colorFilter"
    ) as HTMLSelectElement | null;
    if (select) {
      select.addEventListener("change", () => {
        const value = select.value;
        map.setPaintProperty(
          "world-fill",
          "fill-color",
          buildColorExpressionForCountries(value)
        );
        map.setPaintProperty(
          "states-fill",
          "fill-color",
          buildColorExpressionForStates(value)
        );
      });
    }
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", setupMap, { once: true });
  } else {
    setupMap();
  }
}

if (typeof window !== "undefined") {
  initComingMap();
}
