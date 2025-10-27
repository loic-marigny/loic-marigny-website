type MapCategory = {
  id: string;
  label: string;
  color: string;
  showInLegend?: boolean;
};

export const mapCategories: MapCategory[] = [
  { id: "priority", label: "Prioritaire", color: "#8B5CF6" },
  { id: "strong-interest", label: "IntÃ©rÃªt fort", color: "#075737ff" },
  { id: "interesting", label: "IntÃ©rÃªt", color: "#0ca953ff" },
  { id: "curiosity", label: "CuriositÃ©", color: "#9ac90dff" },
  {
    id: "work-conditional",
    label: "En fonction du travail proposÃ©",
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
  "118": "situation-unstable", // Gaza Strip
  "129": "situation-unstable", // Cisjordanie (West Bank)
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
  CHN: "interesting", // Chine
  KAZ: "interesting", // Kazakhstan
  UGA: "interesting", // Ouganda
  TZA: "interesting", // Tanzanie
  KYZ: "interesting", // Kirghizistan
  GEO: "interesting", // Géorgie
  DZA: "interesting", // Algérie
  TUN: "interesting", // Tunisie
  GBR: "interesting", // Royaume-Uni
  ESP: "interesting", // Espagne
  EGY: "interesting", // Égypte
  ITA: "interesting", // Italie
  MLT: "interesting", // Malte
  CYP: "interesting", // Chypre
  GAB: "interesting", // Gabon
  CMR: "interesting", // Cameroun
  PER: "interesting", // Pérou
  CHL: "interesting", // Chili
  LBR: "interesting", // Libéria
  COG: "interesting", // Congo (République du)
  CZE: "interesting", // Tchéquie
  SVK: "interesting", // Slovaquie
  SAU: "interesting", // Arabie saoudite
  AUS: "interesting", // Australie
  NZL: "interesting", // Nouvelle-Zélande
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
  AUT: "curiosity", // Autriche
  BGR: "curiosity", // Bulgarie
  EST: "curiosity", // Estonie
  LIE: "curiosity", // Liechtenstein
  AND: "curiosity", // Andorre
  PRT: "curiosity", // Portugal
  SVN: "curiosity", // Slovénie
  IND: "curiosity", // Inde
  JPN: "curiosity", // Japon
  KOR: "curiosity", // Corée du Sud
  HRV: "curiosity", // Croatie
  FID: "curiosity", // Fidji
  BTN: "curiosity", // Bhoutan
  NPL: "curiosity", // Népal
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
  QAT: "work-conditional", // Qatar
} as const;

export const usaOverrideColor = "#ffffff00";

export const stateCategories = {
  CA: "priority",
  NY: "strong-interest",
  DC: "strong-interest",
  GA: "interesting",
  IL: "interesting",
  WA: "interesting",
  LA: "interesting",
  MA: "interesting",
  MS: "curiosity",
  FL: "curiosity",
  ME: "curiosity"
} as const;
