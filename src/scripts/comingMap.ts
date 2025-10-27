type ColorDictionary = Record<string, string>;

interface ComingMapOptions {
  countryColors: ColorDictionary;
  stateColors: ColorDictionary;
  defaultFillColor: string;
}

declare const maplibregl: any;

const FILTER_ALL = "__all__";

function readOptionsFromDataset(): ComingMapOptions | null {
  const mapElement = document.getElementById("map");
  if (!mapElement) return null;

  const { countryColors, stateColors, defaultFillColor } = mapElement.dataset;
  if (!countryColors || !stateColors || !defaultFillColor) return null;

  try {
    return {
      countryColors: JSON.parse(countryColors),
      stateColors: JSON.parse(stateColors),
      defaultFillColor
    };
  } catch (error) {
    console.warn("[comingMap] Impossible de parser les couleurs depuis les data-attributes.", error);
    return null;
  }
}

export default function initComingMap(passedOptions?: ComingMapOptions) {
  if (typeof window === "undefined") return;
  const options = passedOptions ?? readOptionsFromDataset();
  if (!options) return;

  const { countryColors, stateColors, defaultFillColor } = options;

  let attempts = 0;
  const MAX_ATTEMPTS = 20;

  const buildColorExpressionForCountries = (filterColor: string) => {
    const expr: (string | any[])[] = ["match", ["get", "iso_a3"]];
    for (const iso of Object.keys(countryColors)) {
      const color = countryColors[iso];
      expr.push(iso);
      expr.push(filterColor === FILTER_ALL || color === filterColor ? color : "#ffffff");
    }
    expr.push(defaultFillColor);
    return expr;
  };

  const buildColorExpressionForStates = (filterColor: string) => {
    const expr: (string | any[])[] = ["match", ["get", "stusps"]];
    for (const code of Object.keys(stateColors)) {
      const color = stateColors[code];
      expr.push(code);
      expr.push(filterColor === FILTER_ALL || color === filterColor ? color : "#ffffff");
    }
    expr.push(defaultFillColor);
    return expr;
  };

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

      popupEl.textContent = name;
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

    const select = document.getElementById("colorFilter") as HTMLSelectElement | null;
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
