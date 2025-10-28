export type MapCategory = {
  id: string;
  label: string;
  color: string;
  showInLegend?: boolean;
};

export const mapCategories: MapCategory[] = [
  { id: "priority", label: "Prioritaire", color: "#8B5CF6" },
  { id: "strong-interest", label: "Intérêt fort", color: "#075737ff" },
  { id: "interesting", label: "Intérêt", color: "#0ca953ff" },
  { id: "curiosity", label: "Curiosité", color: "#9ac90dff" },
  {
    id: "work-conditional",
    label: "En fonction du travail proposé",
    color: "#ef4444"
  },
  { id: "situation-unstable", label: "Situation instable", color: "#532504ff" },
  { id: "no", label: "Non", color: "#000000" },
  { id: "france", label: "France", color: "#4B5563", showInLegend: false },
  {
    id: "info-missing",
    label: "Informations insuffisantes",
    color: "#D1D5DB"
  }
] as const;

export const DEFAULT_CATEGORY_ID = "info-missing";

export const DEFAULT_FILL_COLOR =
  mapCategories.find((category) => category.id === DEFAULT_CATEGORY_ID)?.color ??
  "#D1D5DB";

export type MapCategoryId = (typeof mapCategories)[number]["id"];
export type LocaleCode = "fr" | "en" | "ru" | "ar" | "zh";
export type LocalizedText = Partial<Record<LocaleCode, string>>;

export interface DestinationMeta {
  categoryId: MapCategoryId;
  names: LocalizedText;
  explanation?: LocalizedText;
  flag?: string;
}

const isoAlpha2ByAlpha3: Record<string, string> = {
  "AFG": "AF",
  "ALA": "AX",
  "ALB": "AL",
  "DZA": "DZ",
  "ASM": "AS",
  "AND": "AD",
  "AGO": "AO",
  "AIA": "AI",
  "ATA": "AQ",
  "ATG": "AG",
  "ARG": "AR",
  "ARM": "AM",
  "ABW": "AW",
  "AUS": "AU",
  "AUT": "AT",
  "AZE": "AZ",
  "BHS": "BS",
  "BHR": "BH",
  "BGD": "BD",
  "BRB": "BB",
  "BLR": "BY",
  "BEL": "BE",
  "BLZ": "BZ",
  "BEN": "BJ",
  "BMU": "BM",
  "BTN": "BT",
  "BOL": "BO",
  "BES": "BQ",
  "BIH": "BA",
  "BWA": "BW",
  "BVT": "BV",
  "BRA": "BR",
  "IOT": "IO",
  "BRN": "BN",
  "BGR": "BG",
  "BFA": "BF",
  "BDI": "BI",
  "CPV": "CV",
  "KHM": "KH",
  "CMR": "CM",
  "CAN": "CA",
  "CYM": "KY",
  "CAF": "CF",
  "TCD": "TD",
  "CHL": "CL",
  "CHN": "CN",
  "CXR": "CX",
  "CCK": "CC",
  "COL": "CO",
  "COM": "KM",
  "COG": "CG",
  "COD": "CD",
  "COK": "CK",
  "CRI": "CR",
  "CIV": "CI",
  "HRV": "HR",
  "CUB": "CU",
  "CUW": "CW",
  "CYP": "CY",
  "CZE": "CZ",
  "DNK": "DK",
  "DJI": "DJ",
  "DMA": "DM",
  "DOM": "DO",
  "ECU": "EC",
  "EGY": "EG",
  "SLV": "SV",
  "GNQ": "GQ",
  "ERI": "ER",
  "EST": "EE",
  "SWZ": "SZ",
  "ETH": "ET",
  "FLK": "FK",
  "FRO": "FO",
  "FJI": "FJ",
  "FIN": "FI",
  "FRA": "FR",
  "GUF": "GF",
  "PYF": "PF",
  "ATF": "TF",
  "GAB": "GA",
  "GMB": "GM",
  "GEO": "GE",
  "DEU": "DE",
  "GHA": "GH",
  "GIB": "GI",
  "GRC": "GR",
  "GRL": "GL",
  "GRD": "GD",
  "GLP": "GP",
  "GTM": "GT",
  "GGY": "GG",
  "GIN": "GN",
  "GNB": "GW",
  "GUY": "GY",
  "HTI": "HT",
  "VAT": "VA",
  "HND": "HN",
  "HKG": "HK",
  "HUN": "HU",
  "ISL": "IS",
  "IND": "IN",
  "IDN": "ID",
  "IRN": "IR",
  "IRQ": "IQ",
  "IRL": "IE",
  "IMN": "IM",
  "ISR": "IL",
  "ITA": "IT",
  "JAM": "JM",
  "JPN": "JP",
  "JEY": "JE",
  "JOR": "JO",
  "KAZ": "KZ",
  "KEN": "KE",
  "KIR": "KI",
  "PRK": "KP",
  "KOR": "KR",
  "KWT": "KW",
  "KGZ": "KG",
  "LAO": "LA",
  "LVA": "LV",
  "LBN": "LB",
  "LSO": "LS",
  "LBR": "LR",
  "LBY": "LY",
  "LIE": "LI",
  "LTU": "LT",
  "LUX": "LU",
  "MAC": "MO",
  "MDG": "MG",
  "MWI": "MW",
  "MYS": "MY",
  "MDV": "MV",
  "MLI": "ML",
  "MLT": "MT",
  "MHL": "MH",
  "MRT": "MR",
  "MUS": "MU",
  "MYT": "YT",
  "MEX": "MX",
  "FSM": "FM",
  "MDA": "MD",
  "MCO": "MC",
  "MNG": "MN",
  "MNE": "ME",
  "MSR": "MS",
  "MAR": "MA",
  "MOZ": "MZ",
  "MMR": "MM",
  "NAM": "NA",
  "NRU": "NR",
  "NPL": "NP",
  "NLD": "NL",
  "NCL": "NC",
  "NZL": "NZ",
  "NIC": "NI",
  "NER": "NE",
  "NGA": "NG",
  "NIU": "NU",
  "NFK": "NF",
  "MKD": "MK",
  "MNP": "MP",
  "NOR": "NO",
  "OMN": "OM",
  "PAK": "PK",
  "PLW": "PW",
  "PSE": "PS",
  "PAN": "PA",
  "PNG": "PG",
  "PRY": "PY",
  "PER": "PE",
  "PHL": "PH",
  "PCN": "PN",
  "POL": "PL",
  "PRT": "PT",
  "PRI": "PR",
  "QAT": "QA",
  "REU": "RE",
  "ROU": "RO",
  "RUS": "RU",
  "RWA": "RW",
  "BLM": "BL",
  "SHN": "SH",
  "KNA": "KN",
  "LCA": "LC",
  "MAF": "MF",
  "SPM": "PM",
  "VCT": "VC",
  "WSM": "WS",
  "SMR": "SM",
  "STP": "ST",
  "SAU": "SA",
  "SEN": "SN",
  "SRB": "RS",
  "SYC": "SC",
  "SLE": "SL",
  "SGP": "SG",
  "SXM": "SX",
  "SVK": "SK",
  "SVN": "SI",
  "SLB": "SB",
  "SOM": "SO",
  "ZAF": "ZA",
  "SGS": "GS",
  "SSD": "SS",
  "ESP": "ES",
  "LKA": "LK",
  "SDN": "SD",
  "SUR": "SR",
  "SWE": "SE",
  "CHE": "CH",
  "SYR": "SY",
  "TWN": "TW",
  "TJK": "TJ",
  "TZA": "TZ",
  "THA": "TH",
  "TLS": "TL",
  "TGO": "TG",
  "TKL": "TK",
  "TON": "TO",
  "TTO": "TT",
  "TUN": "TN",
  "TUR": "TR",
  "TKM": "TM",
  "TCA": "TC",
  "TUV": "TV",
  "UGA": "UG",
  "UKR": "UA",
  "ARE": "AE",
  "GBR": "GB",
  "USA": "US",
  "UMI": "UM",
  "URY": "UY",
  "UZB": "UZ",
  "VUT": "VU",
  "VEN": "VE",
  "VNM": "VN",
  "VGB": "VG",
  "VIR": "VI",
  "WLF": "WF",
  "ESH": "EH",
  "YEM": "YE",
  "ZMB": "ZM",
  "ZWE": "ZW"
} as const;

const toFlagEmoji = (iso3: string): string | undefined => {
  const iso2 = isoAlpha2ByAlpha3[iso3];
  if (!iso2) return undefined;
  const upper = iso2.toUpperCase();
  if (!/^[A-Z]{2}$/.test(upper)) return undefined;
  const codePoints = [...upper].map((char) => 0x1f1e6 + (char.charCodeAt(0) - 65));
  return String.fromCodePoint(...codePoints);
};

export const DEFAULT_DISPLAY_LOCALE: LocaleCode = "fr";

export const pickLocalizedText = (
  localized: LocalizedText | undefined,
  fallbacks: LocaleCode[] = [DEFAULT_DISPLAY_LOCALE, "en"]
): string => {
  if (!localized) return "";
  for (const locale of fallbacks) {
    const value = localized[locale];
    if (value?.trim()) return value;
  }
  const first = Object.values(localized).find((value) => value?.trim());
  return first ?? "";
};

type CountryEntry = readonly [
  iso: string,
  categoryId: MapCategoryId,
  names: LocalizedText,
  explanation?: LocalizedText
];

const countryData: CountryEntry[] = [
  ["FRA", "france", { fr: "France", en: "France" }],
  ["THA", "priority", { fr: "Thaïlande", en: "Thailand" }, { fr: "Culture riche et diversifiée, modes de vie variés, cuisine exceptionnelle, cadre de vie unique" }],
  ["VNM", "priority", { fr: "Vietnam", en: "Vietnam" }, { fr: "Pays en plein essor, paysages variés, culture millénaire, cuisine renommée" }],
  ["SEN", "priority", { fr: "Sénégal", en: "Senegal" }, { fr: "Pays à fort potentiel de développement, culture extrêmement riche, climat chaud, cuisine exceptionnelle", en: "Country with high growth potential, extremely rich culture, warm climate, outstanding cuisine" }],
  ["CIV", "priority", { fr: "Côte d'Ivoire", en: "Côte d'Ivoire" }, { fr: "Diversité culturelle, faune abondante, population accueillante, climat tropical" }],
  ["AGO", "priority", { fr: "Angola", en: "Angola" }, { fr: "Pays en reconstruction à fort potentiel, richesses naturelles, diversité ethnique, culture vibrante" }],
  ["UZB", "priority", { fr: "Ouzbékistan", en: "Uzbekistan" }, { fr: "Climat très continental, histoire fascinante, architecture grandiose, coût de la vie très bas, richesses naturelles importantes" }],
  ["SGP", "priority", { fr: "Singapour", en: "Singapore" }, { fr: "Ville-État moderne et dynamique, mélange unique de cultures, propreté exemplaire, hub du continent asiatique" }],


  ["BRA", "strong-interest", { fr: "Brésil", en: "Brazil" }, { fr: "Pays en développement, partie du BRICS" }],
  ["ZAF", "strong-interest", { fr: "Afrique du Sud", en: "South Africa" }, { fr: "Pays en développement, partie du BRICS" }],
  ["TWN", "strong-interest", { fr: "Taïwan", en: "Taiwan" }, { fr: "Environnement dynamique, innovation technologique, culture riche" }],
  ["MLI", "strong-interest", { fr: "Mali", en: "Mali" }],
  ["MAR", "strong-interest", { fr: "Maroc", en: "Morocco" }, { fr: "Pays en développement, culture riche, liens historiques forts avec la France" }],
  ["COD", "strong-interest", { fr: "République démocratique du Congo", en: "DR Congo" }, { fr: "Pays en reconstruction avec un fort potentiel économique, richesses naturelles abondantes, liens avec la France" }],
  ["LBN", "strong-interest", { fr: "Liban", en: "Lebanon" }, { fr: "Richesse culturelle et historique, diversité religieuse, cuisine renommée, population accueillante malgré les problèmes sécuritaires" }],
  ["ETH", "strong-interest", { fr: "Éthiopie", en: "Ethiopia" }, { fr: "Culture ancienne, pays en plein essor malgré des problèmes sécuritaires" }],
  ["KEN", "strong-interest", { fr: "Kenya", en: "Kenya" }, { fr: "Pays en développement avec une faune exceptionnelle, paysages variés, population accueillante" }],
  ["NGA", "strong-interest", { fr: "Nigéria", en: "Nigeria" }, { fr: "Pays à fort potentiel économique, diversité culturelle, cuisine riche" }],
  ["GHA", "strong-interest", { fr: "Ghana", en: "Ghana" }],
  ["MDG", "strong-interest", { fr: "Madagascar", en: "Madagascar" }, { fr: "Fort potentiel économique avec l'explosion de la zone Asie-Pacifique, ressources naturelles importantes" }],
  ["ARE", "strong-interest", { fr: "Émirats arabes unis", en: "United Arab Emirates" }],
  ["LKA", "strong-interest", { fr: "Sri Lanka", en: "Sri Lanka" }],
  ["IDN", "strong-interest", { fr: "Indonésie", en: "Indonesia" }, { fr: "Archipel immense avec une biodiversité exceptionnelle, culture variée, population accueillante" }],
  ["PHL", "strong-interest", { fr: "Philippines", en: "Philippines" }, { fr: "Pays insulaire avec des paysages magnifiques, culture riche, population chaleureuse" }],
  ["MYS", "strong-interest", { fr: "Malaisie", en: "Malaysia" }, { fr: "Pays en développement avec une économie dynamique, diversité culturelle, cuisine variée. Acteur majeur du monde de demain" }],
  ["OMN", "strong-interest", { fr: "Oman", en: "Oman" }, { fr: "Stabilité politique, accès au monde arabe dans un pays plus respectueux des droits humains que ses voisins, économie en croissance" }],
  ["BWA", "strong-interest", { fr: "Botswana", en: "Botswana" }, { fr: "Stabilité politique, modèle de démocratie, faune exceptionnelle, ressources naturelles abondantes" }],
  ["MUS", "strong-interest", { fr: "Maurice", en: "Mauritius" }, { fr: "Stabilité politique, cadre de vie exceptionnel" }],
  ["SYC", "strong-interest", { fr: "Seychelles", en: "Seychelles" }],
  ["BEN", "strong-interest", { fr: "Bénin", en: "Benin" }],

  
  ["CAN", "interesting", { fr: "Canada", en: "Canada" }],
  ["CHN", "interesting", { fr: "Chine", en: "China" }, { fr: "Nouveau centre du monde, pays en pleine transformation, richesse culturelle millénaire" }],
  ["KAZ", "interesting", { fr: "Kazakhstan", en: "Kazakhstan" }],
  ["UGA", "interesting", { fr: "Ouganda", en: "Uganda" }],
  ["TZA", "interesting", { fr: "Tanzanie", en: "Tanzania" }],
  ["KGZ", "interesting", { fr: "Kirghizistan", en: "Kyrgyzstan" }],
  ["MNG", "interesting", { fr: "Mongolie", en: "Mongolia" }],
  ["PNG", "interesting", { fr: "Papouasie-Nouvelle-Guinée", en: "Papua New Guinea" }],
  ["GEO", "interesting", { fr: "Géorgie", en: "Georgia" }],
  ["DZA", "interesting", { fr: "Algérie", en: "Algeria" }],
  ["TUR", "interesting", { fr: "Turquie", en: "Turkey" }, { fr: "Pays au carrefour de l'Europe et de l'Asie, riche histoire, culture vibrante, fort potentiel économique" }],
  ["GBR", "interesting", { fr: "Royaume-Uni", en: "United Kingdom" }, { fr: "Patrimoine historique et culturel exceptionnel, comparable à la France, influence internationale majeure" }],
  ["ESP", "interesting", { fr: "Espagne", en: "Spain" }, { fr: "Climat agréable, culture riche, qualité de vie élevée, économie dynamique, politique sociale en réussite" }],
  ["EGY", "interesting", { fr: "Égypte", en: "Egypt" }],
  ["ITA", "interesting", { fr: "Italie", en: "Italy" }, { fr: "Patrimoine historique et culturel exceptionnel, comparable à la France" }],
  ["GAB", "interesting", { fr: "Gabon", en: "Gabon" }],
  ["CMR", "interesting", { fr: "Cameroun", en: "Cameroon" }],
  ["CRI", "interesting", { fr: "Costa Rica", en: "Costa Rica" }],
  ["PER", "interesting", { fr: "Pérou", en: "Peru" }],
  ["CHL", "interesting", { fr: "Chili", en: "Chile" }],
  ["MEX", "interesting", { fr: "Mexique", en: "Mexico" }],
  ["LBR", "interesting", { fr: "Libéria", en: "Liberia" }],
  ["MWI", "interesting", { fr: "Malawi", en: "Malawi" }],
  ["NAM", "interesting", { fr: "Namibie", en: "Namibia" }],
  ["COG", "interesting", { fr: "Congo", en: "Republic of the Congo" }],
  ["CZE", "interesting", { fr: "Tchéquie", en: "Czechia" }, { fr: "Pays en développement avec une économie dynamique, bonne qualité de vie, liens familiaux" }],
  ["SVK", "interesting", { fr: "Slovaquie", en: "Slovakia" }, { fr: "Pays en développement avec une économie dynamique, bonne qualité de vie, liens familiaux" }],
  ["SAU", "interesting", { fr: "Arabie saoudite", en: "Saudi Arabia" }, { fr: "Pays en développement rapide avec de fortes ambitions, histoire riche, bonnes relations internationales" }],
  ["AUS", "interesting", { fr: "Australie", en: "Australia" }, { fr: "Pays moderne avec une excellente qualité de vie, paysages variés, culture occidentale mais unique" }],
  ["NZL", "interesting", { fr: "Nouvelle-Zélande", en: "New Zealand" }, { fr: "Pays isolé mais bonne économie et qualité de vie élevée" }],
  ["KWT", "interesting", { fr: "Koweït", en: "Kuwait" }],
  ["GMB", "interesting", { fr: "Gambie", en: "Gambia" }],
  ["SLE", "interesting", { fr: "Sierra Leone", en: "Sierra Leone" }],
  ["TGO", "interesting", { fr: "Togo", en: "Togo" }],


  ["FIN", "curiosity", { fr: "Finlande", en: "Finland" }],
  ["NOR", "curiosity", { fr: "Norvège", en: "Norway" }],
  ["SWE", "curiosity", { fr: "Suède", en: "Sweden" }],
  ["ISL", "curiosity", { fr: "Islande", en: "Iceland" }],
  ["DNK", "curiosity", { fr: "Danemark", en: "Denmark" }],
  ["DEU", "curiosity", { fr: "Allemagne", en: "Germany" }],
  ["LUX", "curiosity", { fr: "Luxembourg", en: "Luxembourg" }],
  ["NLD", "curiosity", { fr: "Pays-Bas", en: "Netherlands" }],
  ["GRC", "curiosity", { fr: "Grèce", en: "Greece" }, { fr: "Histoire ancienne fascinante, paysages magnifiques, climat agréable" }],
  ["CHE", "curiosity", { fr: "Suisse", en: "Switzerland" }],
  ["CYP", "curiosity", { fr: "Chypre", en: "Cyprus" }],
  ["CUB", "curiosity", { fr: "Cuba", en: "Cuba" }],
  ["AUT", "curiosity", { fr: "Autriche", en: "Austria" }],
  ["BOL", "curiosity", { fr: "Bolivie", en: "Bolivia" }],
  ["BGR", "curiosity", { fr: "Bulgarie", en: "Bulgaria" }],
  ["EST", "curiosity", { fr: "Estonie", en: "Estonia" }],
  ["GRL", "curiosity", { fr: "Groenland", en: "Greenland" }],
  ["MRT", "curiosity", { fr: "Mauritanie", en: "Mauritania" }],
  ["LIE", "curiosity", { fr: "Liechtenstein", en: "Liechtenstein" }],
  ["AND", "curiosity", { fr: "Andorre", en: "Andorra" }],
  ["PRT", "curiosity", { fr: "Portugal", en: "Portugal" }],
  ["POL", "curiosity", { fr: "Pologne", en: "Poland" }],
  ["SVN", "curiosity", { fr: "Slovénie", en: "Slovenia" }],
  ["IND", "curiosity", { fr: "Inde", en: "India" }],
  ["IRL", "curiosity", { fr: "Irlande", en: "Ireland" }],
  ["JPN", "curiosity", { fr: "Japon", en: "Japan" }, { fr: "Cadre de vie dynamique, culture unique mais pays au bord de la crise démographique" }],
  ["KHM", "curiosity", { fr: "Cambodge", en: "Cambodia" }],
  ["LAO", "curiosity", { fr: "Laos", en: "Laos" }],
  ["KOR", "curiosity", { fr: "Corée du Sud", en: "South Korea" }, { fr: "Cadre de vie dynamique, culture unique mais pays au bord de la crise démographique" }],
  ["HRV", "curiosity", { fr: "Croatie", en: "Croatia" }],
  ["MLT", "curiosity", { fr: "Malte", en: "Malta" }],
  ["FJI", "curiosity", { fr: "Fidji", en: "Fiji" }],
  ["BTN", "curiosity", { fr: "Bhoutan", en: "Bhutan" }],
  ["NPL", "curiosity", { fr: "Népal", en: "Nepal" }],
  ["PAN", "curiosity", { fr: "Panama", en: "Panama" }],
  ["URY", "curiosity", { fr: "Uruguay", en: "Uruguay" }],
  ["TJK", "curiosity", { fr: "Tadjikistan", en: "Tajikistan" }],
  ["SLB", "curiosity", { fr: "Îles Salomon", en: "Solomon Islands" }],
  ["JOR", "curiosity", { fr: "Jordanie", en: "Jordan" }],
  ["ZMB", "curiosity", { fr: "Zambie", en: "Zambia" }],
  ["COM", "curiosity", { fr: "Comores", en: "Comoros" }],
  ["MDV", "curiosity", { fr: "Maldives", en: "Maldives" }],
  ["STP", "curiosity", { fr: "Sao Tomé-et-Principe", en: "São Tomé and Príncipe" }],
  ["GUY", "curiosity", { fr: "Guyana", en: "Guyana" }],
  ["DOM", "curiosity", { fr: "République dominicaine", en: "Dominican Republic" }],
  ["NRU", "curiosity", { fr: "Nauru", en: "Nauru" }],
  ["TUN", "curiosity", { fr: "Tunisie", en: "Tunisia" }],


  ["BEL", "work-conditional", { fr: "Belgique", en: "Belgium" }, { fr: "Intérêt d'une expérience professionnelle limité par rapport à la France" }],
  ["HUN", "work-conditional", { fr: "Hongrie", en: "Hungary" }, { fr: "Histoire riche et fascinante mais pays en dérive autoritaire inquiétante. Droits humains inquiétés." }],
  ["ROU", "work-conditional", { fr: "Roumanie", en: "Romania" }],
  ["LVA", "work-conditional", { fr: "Lettonie", en: "Latvia" }, { fr: "Déjà vécu en Lettonie, valeur ajoutée limitée comparée à ses voisins." }],
  ["LTU", "work-conditional", { fr: "Lituanie", en: "Lithuania" }, { fr: "Valeur ajoutée limitée comparée à ses voisins." }],
  ["BLR", "work-conditional", { fr: "Biélorussie", en: "Belarus" }, { fr: "Risque de dérive autoritaire, situation économique fragile, ingérences russes." }],
  ["ALB", "work-conditional", { fr: "Albanie", en: "Albania" }],
  ["BIH", "work-conditional", { fr: "Bosnie-Herzégovine", en: "Bosnia and Herzegovina" }],
  ["MKD", "work-conditional", { fr: "Macédoine du Nord", en: "North Macedonia" }],
  ["SRB", "work-conditional", { fr: "Serbie", en: "Serbia" }],
  ["MNE", "work-conditional", { fr: "Monténégro", en: "Montenegro" }],
  ["XKX", "work-conditional", { fr: "Kosovo", en: "Kosovo" }],
  ["MDA", "work-conditional", { fr: "Moldavie", en: "Moldova" }],
  ["PRY", "work-conditional", { fr: "Paraguay", en: "Paraguay" }],
  ["QAT", "work-conditional", { fr: "Qatar", en: "Qatar" }, { fr: "Pays riche en développement rapide mais régime autoritaire répressif. Droits humains bafoués, ingérences à l'international." }],
  ["TUV", "work-conditional", { fr: "Tuvalu", en: "Tuvalu" }],
  ["VUT", "work-conditional", { fr: "Vanuatu", en: "Vanuatu" }],
  ["ERI", "work-conditional", { fr: "Érythrée", en: "Eritrea" }],
  ["TCD", "work-conditional", { fr: "Tchad", en: "Chad" }],
  ["CAF", "work-conditional", { fr: "République centrafricaine", en: "Central African Republic" }],
  ["BDI", "work-conditional", { fr: "Burundi", en: "Burundi" }],
  ["ZWE", "work-conditional", { fr: "Zimbabwe", en: "Zimbabwe" }],
  ["SWZ", "work-conditional", { fr: "Eswatini", en: "Eswatini" }],
  ["LSO", "work-conditional", { fr: "Lesotho", en: "Lesotho" }],
  ["GIN", "work-conditional", { fr: "Guinée", en: "Guinea" }],
  ["GNB", "work-conditional", { fr: "Guinée-Bissau", en: "Guinea-Bissau" }],
  ["COL", "work-conditional", { fr: "Colombie", en: "Colombia" }],
  ["VEN", "work-conditional", { fr: "Venezuela", en: "Venezuela" }],
  ["GNQ", "work-conditional", { fr: "Guinée équatoriale", en: "Equatorial Guinea" }],
  ["JAM", "work-conditional", { fr: "Jamaïque", en: "Jamaica" }],
  ["BHS", "work-conditional", { fr: "Bahamas", en: "Bahamas" }],
  ["GTM", "work-conditional", { fr: "Guatemala", en: "Guatemala" }],
  ["HND", "work-conditional", { fr: "Honduras", en: "Honduras" }],
  ["SLV", "work-conditional", { fr: "Salvador", en: "El Salvador" }],
  ["USA", "work-conditional", { fr: "États-Unis", en: "United States" }],

  
  ["111", "situation-unstable", { fr: "Abyei", en: "Abyei" }, { fr: "Zone frontalière disputée entre le Soudan et le Soudan du Sud, tensions récurrentes" }],
  ["112", "situation-unstable", { fr: "Aksai Chin", en: "Aksai Chin" }, { fr: "Zone disputée entre l'Inde et la Chine, tensions militaires fréquentes, accès restreint" }],
  ["113", "situation-unstable", { fr: "CH-IN", en: "CH-IN" }, { fr: "Zone disputée entre l'Inde et la Chine, tensions militaires fréquentes, accès restreint" }],
  ["114", "situation-unstable", { fr: "Demchok", en: "Demchok" }, { fr: "Zone disputée entre l'Inde et la Chine, tensions militaires fréquentes, accès restreint" }],
  ["118", "situation-unstable", { fr: "Bande de Gaza", en: "Gaza Strip" }, { fr: "Zone à haut risque en raison du génocide en cours. Gouvernement d'idéologie islamiste, soumis aux ingérences du Qatar et de l'Iran." }],
  ["119", "situation-unstable", { fr: "Kalapani", en: "Kalapani" }, { fr: "Zone frontalière disputée entre l'Inde et le Népal" }],
  ["121", "situation-unstable", { fr: "Siachen-Saltoro", en: "Siachen-Saltoro" }, { fr: "Zone disputée entre l'Inde et le Pakistan, tensions militaires fréquentes, conditions de vie difficiles" }],
  ["129", "situation-unstable", { fr: "Cisjordanie", en: "West Bank" }, { fr: "Territoire à haut risque en raison de la colonisation illégale permise par le gouvernement israélien." }],
  ["PSE", "situation-unstable", { fr: "Palestine", en: "Palestine" }],
  ["UKR", "situation-unstable", { fr: "Ukraine", en: "Ukraine" }, { fr: "Conflit armé majeur, instabilité politique, crise humanitaire, tensions internationales élevées" }],
  ["NER", "situation-unstable", { fr: "Niger", en: "Niger" }],
  ["SDN", "situation-unstable", { fr: "Soudan", en: "Sudan" }, { fr: "Conflits armés persistants, instabilité politique, risques sécuritaires élevés, droits humains bafoués" }],
  ["SSD", "situation-unstable", { fr: "Sud-Soudan", en: "South Sudan" }, { fr: "Guerre civile dévastatrice, crise humanitaire majeure, instabilité politique chronique" }],
  ["HTI", "situation-unstable", { fr: "Haïti", en: "Haiti" }, { fr: "Crise humanitaire catastrophique, instabilité politique grave, pauvreté extrême" }],
  ["AZE", "situation-unstable", { fr: "Azerbaïdjan", en: "Azerbaijan" }, { fr: "Conflit territorial non résolu, tensions régionales élevées, gouvernance autoritaire" }],
  ["ARM", "situation-unstable", { fr: "Arménie", en: "Armenia" }, { fr: "Tensions régionales persistantes, instabilité politique occasionnelle, économie fragile" }],
  ["MOZ", "situation-unstable", { fr: "Mozambique", en: "Mozambique" }, { fr: "Conflits armés intermittents, instabilité politique, pauvreté généralisée" }],
  ["LBY", "situation-unstable", { fr: "Libye", en: "Libya" }, { fr: "Instabilité politique chronique, conflits armés persistants, risques sécuritaires élevés" }],
  ["BFA", "situation-unstable", { fr: "Burkina Faso", en: "Burkina Faso" }, { fr: "Insécurité croissante due aux groupes armés, instabilité politique, pauvreté généralisée" }],
  ["ARG", "situation-unstable", { fr: "Argentine", en: "Argentina" }, { fr: "Crise sociale et humanitaire grave, instabilité politique et économique" }],
  ["ESH", "situation-unstable", { fr: "Sahara occidental", en: "Western Sahara" }, { fr: "Conflit territorial non résolu, tensions régionales élevées, situation humanitaire précaire" }],


  
  ["RWA", "no", { fr: "Rwanda", en: "Rwanda" }, { fr: "Responsabilité dans le génocide en RDC, régime autoritaire répressif" }],
  ["TKM", "no", { fr: "Turkménistan", en: "Turkmenistan" }, { fr: "Dictature extrême, restrictions sévères sur les libertés individuelles, isolé internationalement" }],
  ["AFG", "no", { fr: "Afghanistan", en: "Afghanistan" }, { fr: "Conflits armés persistants, instabilité politique, risques sécuritaires élevés, droits humains bafoués" }],
  ["IRN", "no", { fr: "Iran", en: "Iran" }, { fr: "Régime théocratique oppressif, tensions géopolitiques importantes, violations des droits humains" }],
  ["PRK", "no", { fr: "Corée du Nord", en: "North Korea" }, { fr: "Régime autoritaire strict, isolement international, restrictions sévères sur les libertés individuelles" }],
  ["ISR", "no", { fr: "Israël", en: "Israel" }, { fr: "État colonial commettant actuellement un génocide" }],
  ["PAK", "no", { fr: "Pakistan", en: "Pakistan" }, { fr: "Tensions géopolitiques élevées, instabilité politique, risques sécuritaires importants" }],
  ["MMR", "no", { fr: "Birmanie (Myanmar)", en: "Myanmar" }, { fr: "Conflits ethniques persistants, instabilité politique, crise humanitaire majeure" }],
  ["IRQ", "no", { fr: "Irak", en: "Iraq" }, { fr: "Instabilité politique chronique, menaces terroristes, tensions sectaires élevées" }],
  ["SYR", "no", { fr: "Syrie", en: "Syria" }, { fr: "Guerre civile dévastatrice, crise humanitaire majeure, instabilité politique chronique" }],
  ["YEM", "no", { fr: "Yémen", en: "Yemen" }, { fr: "Crise humanitaire catastrophique, conflits armés persistants, instabilité politique grave" }],
  ["SOM", "no", { fr: "Somalie", en: "Somalia" }, { fr: "Instabilité politique chronique, conflits armés persistants, risques sécuritaires extrêmes" }],
  ["RUS", "no", { fr: "Russie", en: "Russia" }, { fr: "Régime autoritaire répressif, violations des droits humains, comportement international agressif" }],
] as const;

export const countryMeta = Object.fromEntries(
  countryData.map(([iso, categoryId, names, explanation]) => {
    const flag = toFlagEmoji(iso);
    return [
      iso,
      {
        categoryId,
        names,
        ...(explanation ? { explanation } : {}),
        ...(flag ? { flag } : {})
      }
    ];
  })
) as Record<string, DestinationMeta>;

export const countryCategories = Object.fromEntries(
  countryData.map(([iso, categoryId]) => [iso, categoryId])
) as Record<string, MapCategoryId>;

export interface CategorizedDestination {
  iso: string;
  displayName: string;
  explanation: string;
  flag: string;
  flagUrl?: string;
  iso2?: string;
  meta: DestinationMeta;
}

export interface CategorizedCountryGroup {
  category: MapCategory;
  destinations: CategorizedDestination[];
}

const buildDestination = (iso: string, meta: DestinationMeta): CategorizedDestination => {
  const iso2 = isoAlpha2ByAlpha3[iso];
  const flag = meta.flag ?? toFlagEmoji(iso) ?? "🌍";
  const flagUrl = iso2 ? `https://flagcdn.com/w40/${iso2.toLowerCase()}.png` : undefined;
  return {
    iso,
    iso2,
    displayName: pickLocalizedText(meta.names),
    explanation: pickLocalizedText(meta.explanation),
    flag,
    flagUrl,
    meta
  };
};

const countryDestinationsByCategory = new Map<MapCategoryId, CategorizedDestination[]>();
for (const category of mapCategories) {
  countryDestinationsByCategory.set(category.id, []);
}

for (const [iso] of countryData) {
  const meta = countryMeta[iso];
  if (!meta) continue;
  const destinations = countryDestinationsByCategory.get(meta.categoryId);
  if (destinations) destinations.push(buildDestination(iso, meta));
}

export const countriesByCategory: CategorizedCountryGroup[] = mapCategories
  .map((category) => ({
    category,
    destinations: countryDestinationsByCategory.get(category.id) ?? []
  }))
  .filter((group) => group.destinations.length > 0);

export const usaOverrideColor = "#ffffff00";

type StateEntry = readonly [
  code: string,
  categoryId: MapCategoryId,
  names: LocalizedText,
  explanation?: LocalizedText
];

const stateData: StateEntry[] = [
  ["CA", "strong-interest", { fr: "Californie", en: "California" }, { fr: "Région extrêmement dynamique, avec une culture florissante, mais nation décadente en voie de fascisation.", en: "Extremely dynamic region with a flourishing culture, but the nation is sliding toward fascism." }],
  ["NY", "strong-interest", { fr: "New York", en: "New York" }, { fr: "NYC uniquement. Ville dynamique, culturelle et cosmopolite, mais nation décadente en voie de fascisation.", en: "NYC only. Dynamic, cultural and cosmopolitan city, but the nation is sliding toward fascism." }],
  ["DC", "strong-interest", { fr: "Washington DC", en: "Washington, D.C." }, { fr: "Ville dynamique et environnement professionnel riche, mais nation décadente en voie de fascisation.", en: "Dynamic city with a rich professional environment, but the nation is sliding toward fascism." }],

  ["GA", "interesting", { fr: "Géorgie", en: "Georgia" }],
  ["IL", "interesting", { fr: "Illinois", en: "Illinois" }],
  ["LA", "interesting", { fr: "Louisiane", en: "Louisiana" }],
  ["MA", "interesting", { fr: "Massachusetts", en: "Massachusetts" }],
  ["WA", "interesting", { fr: "Washington", en: "Washington" }],

  ["AZ", "curiosity", { fr: "Arizona", en: "Arizona" }],
  ["CO", "curiosity", { fr: "Colorado", en: "Colorado" }],
  ["CT", "curiosity", { fr: "Connecticut", en: "Connecticut" }],
  ["FL", "curiosity", { fr: "Floride", en: "Florida" }],
  ["ME", "curiosity", { fr: "Maine", en: "Maine" }],
  ["MS", "curiosity", { fr: "Mississippi", en: "Mississippi" }],
  ["NJ", "curiosity", { fr: "New Jersey", en: "New Jersey" }],
  ["NM", "curiosity", { fr: "Nouveau-Mexique", en: "New Mexico" }],
  ["NV", "curiosity", { fr: "Nevada", en: "Nevada" }],
  ["RI", "curiosity", { fr: "Rhode Island", en: "Rhode Island" }],

  ["AK", "work-conditional", { fr: "Alaska", en: "Alaska" }],
  ["AL", "work-conditional", { fr: "Alabama", en: "Alabama" }],
  ["AR", "work-conditional", { fr: "Arkansas", en: "Arkansas" }],
  ["AS", "work-conditional", { fr: "Samoa américaines", en: "American Samoa" }],
  ["DE", "work-conditional", { fr: "Delaware", en: "Delaware" }],
  ["GU", "work-conditional", { fr: "Guam", en: "Guam" }],
  ["HI", "work-conditional", { fr: "Hawaï", en: "Hawaii" }],
  ["IA", "work-conditional", { fr: "Iowa", en: "Iowa" }],
  ["ID", "work-conditional", { fr: "Idaho", en: "Idaho" }],
  ["IN", "work-conditional", { fr: "Indiana", en: "Indiana" }],
  ["KS", "work-conditional", { fr: "Kansas", en: "Kansas" }],
  ["KY", "work-conditional", { fr: "Kentucky", en: "Kentucky" }],
  ["MD", "work-conditional", { fr: "Maryland", en: "Maryland" }],
  ["MI", "work-conditional", { fr: "Michigan", en: "Michigan" }],
  ["MN", "work-conditional", { fr: "Minnesota", en: "Minnesota" }],
  ["MO", "work-conditional", { fr: "Missouri", en: "Missouri" }],
  ["MP", "work-conditional", { fr: "Mariannes du Nord", en: "Northern Mariana Islands" }],
  ["MT", "work-conditional", { fr: "Montana", en: "Montana" }],
  ["NC", "work-conditional", { fr: "Caroline du Nord", en: "North Carolina" }],
  ["ND", "work-conditional", { fr: "Dakota du Nord", en: "North Dakota" }],
  ["NE", "work-conditional", { fr: "Nebraska", en: "Nebraska" }],
  ["NH", "work-conditional", { fr: "New Hampshire", en: "New Hampshire" }],
  ["OH", "work-conditional", { fr: "Ohio", en: "Ohio" }],
  ["OK", "work-conditional", { fr: "Oklahoma", en: "Oklahoma" }],
  ["OR", "work-conditional", { fr: "Oregon", en: "Oregon" }],
  ["PA", "work-conditional", { fr: "Pennsylvanie", en: "Pennsylvania" }],
  ["PR", "work-conditional", { fr: "Porto Rico", en: "Puerto Rico" }],
  ["SC", "work-conditional", { fr: "Caroline du Sud", en: "South Carolina" }],
  ["SD", "work-conditional", { fr: "Dakota du Sud", en: "South Dakota" }],
  ["TN", "work-conditional", { fr: "Tennessee", en: "Tennessee" }],
  ["TX", "work-conditional", { fr: "Texas", en: "Texas" }],
  ["UT", "work-conditional", { fr: "Utah", en: "Utah" }],
  ["VA", "work-conditional", { fr: "Virginie", en: "Virginia" }],
  ["VI", "work-conditional", { fr: "Îles Vierges américaines", en: "U.S. Virgin Islands" }],
  ["VT", "work-conditional", { fr: "Vermont", en: "Vermont" }],
  ["WI", "work-conditional", { fr: "Wisconsin", en: "Wisconsin" }],
  ["WV", "work-conditional", { fr: "Virginie-Occidentale", en: "West Virginia" }],
  ["WY", "work-conditional", { fr: "Wyoming", en: "Wyoming" }]
] as const;
export const stateMeta = Object.fromEntries(
  stateData.map(([code, categoryId, names, explanation]) => [
    code,
    {
      categoryId,
      names,
      ...(explanation ? { explanation } : {}),
      flag: "????"
    }
  ])
) as Record<string, DestinationMeta>;

export const stateCategories = Object.fromEntries(
  stateData.map(([code, categoryId]) => [code, categoryId])
) as Record<string, MapCategoryId>;
