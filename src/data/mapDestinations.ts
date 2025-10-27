type MapCategory = {
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

export const countryCategories = {
  FRA: "france", // France

  THA: "priority", // Thaïlande
  VNM: "priority", // Vietnam
  SEN: "priority", // Sénégal
  CIV: "priority", // Côte d'Ivoire
  AGO: "priority", // Angola
  UZB: "priority", // Ouzbékistan
  SGP: "priority", // Singapour

  AFG: "no", // Afghanistan
  IRN: "no", // Iran
  PRK: "no", // Corée du Nord
  ISR: "no", // Israël
  PAK: "no", // Pakistan
  MMR: "no", // Birmanie (Myanmar)
  IRQ: "no", // Irak
  SYR: "no", // Syrie
  YEM: "no", // Yémen
  SOM: "no", // Somalie
  RUS: "no", // Russie
  RWA: "no", // Rwanda
  TKM: "no", // Turkménistan

  "112": "situation-unstable", // Aksai Chin
  "113": "situation-unstable", // CH-IN
  "114": "situation-unstable", // Demchok
  "118": "situation-unstable", // Gaza Strip
  "119": "situation-unstable", // Kalapani
  "121": "situation-unstable", // Siachen-Saltoro
  "129": "situation-unstable", // Cisjordanie (West Bank)
  PSE: "situation-unstable", // Palestine
  UKR: "situation-unstable", // Ukraine
  NER: "situation-unstable", // Niger
  SDN: "situation-unstable", // Soudan
  SSD: "situation-unstable", // Sud-Soudan
  HTI: "situation-unstable", // Haïti
  AZE: "situation-unstable", // Azerbaïdjan
  ARM: "situation-unstable", // Arménie
  MOZ: "situation-unstable", // Mozambique
  LBY: "situation-unstable", // Libye
  BFA: "situation-unstable", // Burkina Faso
  ARG: "situation-unstable", // Argentine
  ESH: "situation-unstable", // Sahara Occidental

  BRA: "strong-interest", // Brésil
  ZAF: "strong-interest", // Afrique du Sud
  TWN: "strong-interest", // Taïwan
  MLI: "strong-interest", // Mali
  MAR: "strong-interest", // Maroc
  COD: "strong-interest", // République démocratique du Congo
  LBN: "strong-interest", // Liban
  ETH: "strong-interest", // Éthiopie
  KEN: "strong-interest", // Kenya
  NGA: "strong-interest", // Nigéria
  GHA: "strong-interest", // Ghana
  MDG: "strong-interest", // Madagascar
  ARE: "strong-interest", // Émirats arabes unis
  LKA: "strong-interest", // Sri Lanka
  IDN: "strong-interest", // Indonésie
  PHL: "strong-interest", // Philippines
  MYS: "strong-interest", // Malaisie
  OMN: "strong-interest", // Oman
  BWA: "strong-interest", // Botswana
  MUS: "strong-interest", // Maurice
  SYC: "strong-interest", // Seychelles
  BEN: "strong-interest", // Bénin

  CAN: "interesting", // Canada
  CHN: "interesting", // Chine
  KAZ: "interesting", // Kazakhstan
  UGA: "interesting", // Ouganda
  TZA: "interesting", // Tanzanie
  KGZ: "interesting", // Kirghizistan
  MNG: "interesting", // Mongolie
  PNG: "interesting", // Papouasie-Nouvelle-Guinée
  GEO: "interesting", // Géorgie
  DZA: "interesting", // Algérie
  TUR: "interesting", // Turquie
  GBR: "interesting", // Royaume-Uni
  ESP: "interesting", // Espagne
  EGY: "interesting", // Égypte
  ITA: "interesting", // Italie
  GAB: "interesting", // Gabon
  CMR: "interesting", // Cameroun
  CRI: "interesting", // Costa Rica
  PER: "interesting", // Pérou
  CHL: "interesting", // Chili
  MEX: "interesting", // Mexique
  LBR: "interesting", // Libéria
  MWI: "interesting", // Malawi
  NAM: "interesting", // Namibie
  COG: "interesting", // Congo (République du)
  CZE: "interesting", // Tchéquie
  SVK: "interesting", // Slovaquie
  SAU: "interesting", // Arabie saoudite
  AUS: "interesting", // Australie
  NZL: "interesting", // Nouvelle-Zélande
  KWT: "interesting", // Koweït
  GMB: "interesting", // Gambie
  SLE: "interesting", // Sierra Leone
  TGO: "interesting", // Togo

  FIN: "curiosity", // Finlande
  NOR: "curiosity", // Norvège
  SWE: "curiosity", // Suède
  ISL: "curiosity", // Islande
  DNK: "curiosity", // Danemark
  DEU: "curiosity", // Allemagne
  LUX: "curiosity", // Luxembourg
  NLD: "curiosity", // Pays-Bas
  GRC: "curiosity", // Grèce
  CHE: "curiosity", // Suisse
  CYP: "curiosity", // Chypre
  CUB: "curiosity", // Cuba
  AUT: "curiosity", // Autriche
  BOL: "curiosity", // Bolivie
  BGR: "curiosity", // Bulgarie
  EST: "curiosity", // Estonie
  GRL: "curiosity", // Groenland
  MRT: "curiosity", // Mauritanie
  LIE: "curiosity", // Liechtenstein
  AND: "curiosity", // Andorre
  PRT: "curiosity", // Portugal
  POL: "curiosity", // Pologne
  SVN: "curiosity", // Slovénie
  IND: "curiosity", // Inde
  IRL: "curiosity", // Irlande
  JPN: "curiosity", // Japon
  KHM: "curiosity", // Cambodge
  LAO: "curiosity", // Laos
  KOR: "curiosity", // Corée du Sud
  HRV: "curiosity", // Croatie
  MLT: "curiosity", // Malte
  FJI: "curiosity", // Fidji
  BTN: "curiosity", // Bhoutan
  NPL: "curiosity", // Népal
  PAN: "curiosity", // Panama
  URY: "curiosity", // Uruguay
  TJK: "curiosity", // Tadjikistan
  SLB: "curiosity", // Îles Salomon
  JOR: "curiosity", // Jordanie
  ZMB: "curiosity", // Zambie
  COM: "curiosity", // Comores
  MDV: "curiosity", // Maldives
  STP: "curiosity", // Sao Tomé-et-Principe
  GUY: "curiosity", // Guyana
  DOM: "curiosity", // République dominicaine
  NRU: "curiosity", // Nauru
  TUN: "curiosity", // Tunisie

  BEL: "work-conditional", // Belgique
  HUN: "work-conditional", // Hongrie
  ROU: "work-conditional", // Roumanie
  LVA: "work-conditional", // Lettonie
  LTU: "work-conditional", // Lituanie
  BLR: "work-conditional", // Biélorussie
  ALB: "work-conditional", // Albanie
  BIH: "work-conditional", // Bosnie-Herzégovine
  MKD: "work-conditional", // Macédoine du Nord
  SRB: "work-conditional", // Serbie
  MNE: "work-conditional", // Monténégro
  XKX: "work-conditional", // Kosovo
  MDA: "work-conditional", // Moldavie
  PRY: "work-conditional", // Paraguay
  QAT: "work-conditional", // Qatar
  TUV: "work-conditional", // Tuvalu
  VUT: "work-conditional", // Vanuatu
  ERI: "work-conditional", // Érythrée
  TCD: "work-conditional", // Tchad
  CAF: "work-conditional", // Centrafrique
  BDI: "work-conditional", // Burundi
  ZWE: "work-conditional", // Zimbabwe
  SWZ: "work-conditional", // Eswatini
  LSO: "work-conditional", // Lesotho
  GIN: "work-conditional", // Guinée
  GNB: "work-conditional", // Guinée-Bissau
  COL: "work-conditional", // Colombie
  VEN: "work-conditional", // Venezuela
  GNQ: "work-conditional", // Guinée équatoriale
  JAM: "work-conditional", // Jamaïque
  BHS: "work-conditional", // Bahamas
  GTM: "work-conditional", // Guatemala
  HND: "work-conditional", // Honduras
  SLV: "work-conditional", // Salvador
  USA: "work-conditional" // États-Unis (reste)
} as const;

export const countryExplanations = {
  SEN: "Pays à fort potentiel de développement, culture extrêmement riche, climat chaud, cuisine exceptionnelle"
} as const;

export const usaOverrideColor = "#ffffff00";

export const stateCategories = {
  CA: "strong-interest",

  NY: "strong-interest",
  DC: "strong-interest",

  GA: "interesting",
  IL: "interesting",
  LA: "interesting",
  MA: "interesting",
  WA: "interesting",

  AZ: "curiosity",
  CO: "curiosity",
  CT: "curiosity",
  FL: "curiosity",
  ME: "curiosity",
  MS: "curiosity",
  NJ: "curiosity",
  NM: "curiosity",
  NV: "curiosity",
  RI: "curiosity",

  AK: "work-conditional",
  AL: "work-conditional",
  AR: "work-conditional",
  AS: "work-conditional",
  DE: "work-conditional",
  GU: "work-conditional",
  HI: "work-conditional",
  IA: "work-conditional",
  ID: "work-conditional",
  IN: "work-conditional",
  KS: "work-conditional",
  KY: "work-conditional",
  MD: "work-conditional",
  MI: "work-conditional",
  MN: "work-conditional",
  MO: "work-conditional",
  MP: "work-conditional",
  MT: "work-conditional",
  NC: "work-conditional",
  ND: "work-conditional",
  NE: "work-conditional",
  NH: "work-conditional",
  OH: "work-conditional",
  OK: "work-conditional",
  OR: "work-conditional",
  PA: "work-conditional",
  PR: "work-conditional",
  SC: "work-conditional",
  SD: "work-conditional",
  TN: "work-conditional",
  TX: "work-conditional",
  UT: "work-conditional",
  VA: "work-conditional",
  VI: "work-conditional",
  VT: "work-conditional",
  WI: "work-conditional",
  WV: "work-conditional",
  WY: "work-conditional"
} as const;

export const stateExplanations = {
  NY: "NYC uniquement"
} as const;
