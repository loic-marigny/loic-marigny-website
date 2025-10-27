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
  SEN: "Pays à fort potentiel de développement, culture extrêmement riche, climat chaud, cuisine exceptionnelle",
  UZB: "Climat très continental, histoire fascinante, architecture grandiose, coût de la vie très bas, richesses naturelles importantes",
  SGP: "Ville-État moderne et dynamique, mélange unique de cultures, propreté exemplaire, hub du continent asiatique",
  THA: "Culture riche et diversifiée, modes de vie variés, cuisine exceptionnelle, cadre de vie unique",
  VNM: "Pays en plein essor, paysages variés, culture millénaire, cuisine renommée",
  CIV: "Diversité culturelle, faune abondante, population accueillante, climat tropical",
  AGO: "Pays en reconstruction à fort potentiel, richesses naturelles, diversité ethnique, culture vibrante",

  BWA: "Stabilité politique, modèle de démocratie, faune exceptionnelle, ressources naturelles abondantes",
  LBN: "Richesse culturelle et historique, diversité religieuse, cuisine renommée, population accueillante malgré les problèmes sécuritaires",
  TWN: "Environnement dynamique, innovation technologique, culture riche",
  MAR: "Pays en développement, culture riche, liens historiques forts avec la France",
  ETH: "Culture ancienne, pays en plein essor malgré des problèmes sécuritaires",
  KEN: "Pays en développement avec une faune exceptionnelle, paysages variés, population accueillante",
  NGA: "Pays à fort potentiel économique, diversité culturelle, cuisine riche",
  IDN: "Archipel immense avec une biodiversité exceptionnelle, culture variée, population accueillante",
  PHL: "Pays insulaire avec des paysages magnifiques, culture riche, population chaleureuse",
  MYS: "Pays en développement avec une économie dynamique, diversité culturelle, cuisine variée. Acteur majeur du monde de demain",
  OMN: "Stabilité politique, accès au monde arabe dans un pays plus respectueux des droits humains que ses voisins, économie en croissance",
  MUS: "Stabilité politique, cadre de vie exceptionnel",
  ZAF: "Pays en développement, partie du BRICS",
  MDG: "Fort potentiel économique avec l'explosion de la zone Asie-Pacifique, ressources naturelles importantes",
  COD: "Pays en reconstruction avec un fort potentiel économique, richesses naturelles abondantes, liens avec la France",



  CHN: "Nouveau centre du monde, pays en pleine transformation, richesse culturelle millénaire",
  TUR: "Pays au carrefour de l'Europe et de l'Asie, riche histoire, culture vibrante, fort potentiel économique",
  ESP: "Climat agréable, culture riche, qualité de vie élevée, économie en dynamique, politique sociale en réussite",
  ITA: "Patrimoine historique et culturel exceptionnel, comparable à la France",
  GBR: "Patrimoine historique et culturel exceptionnel, comparable à la France, influence internationale majeure",
  GRC: "Histoire ancienne fascinante, paysages magnifiques, climat agréable",
  AUS: "Pays moderne avec une excellente qualité de vie, paysages variés, culture occidentale mais unique",
  NZL: "Pays isolé mais bonne économie et qualité de vie élevée",
  SAU: "Pays en développement rapide avec de fortes ambitions, histoire riche, bonnes relations internationales",
  SVK: "Pays en développement avec une économie dynamique, bonne qualité de vie, liens familiaux",
  CZE: "Pays en développement avec une économie dynamique, bonne qualité de vie, liens familiaux",


  JPN: "Cadre de vie dynamique, culture unique mais pays au bord de la crise démographique",
  KOR: "Cadre de vie dynamique, culture unique mais pays au bord de la crise démographique",

  HUN: "Histoire riche et fascinante mais pays en dérive autoritaire inquiétante. Droits humains inquiétés.",
  QAT: "Pays riche en développement rapide mais régime autoritaire répressif. Droits humains bafoués, ingérences à l'international.",
  BEL: "Intérêt d'une expérience professionnelle limité par rapport à la France.",
  LVA: "Déjà vécu en Lettonie, valeur ajoutée limitée comparée à ses voisins.",
  LTU: "Valeur ajoutée limitée comparée à ses voisins.",
  BLR: "Risque de dérive autoritaire, situation économique fragile, ingérences russes.",

  
  112: "Zone disputée entre l'Inde et la Chine, tensions militaires fréquentes, accès restreint",
  118: "Zone à haut risque en raison du génocide en cours. Gouvernement d'idéologie islamiste, soumis aux ingérences du Qatar et de l'Iran.",
  129: "Territoire à haut risque en raison de la colonisation illégale permise par le gouvernement israélien.",
  113: "Zone disputée entre l'Inde et la Chine, tensions militaires fréquentes, accès restreint",
  114: "Zone disputée entre l'Inde et la Chine, tensions militaires fréquentes, accès restreint",
  121: "Zone disputée entre l'Inde et le Pakistan, tensions militaires fréquentes, conditions de vie difficiles",
  UKR: "Conflit armé majeur, instabilité politique, crise humanitaire, tensions internationales élevées",
  SDN: "Conflits armés persistants, instabilité politique, risques sécuritaires élevés, droits humains bafoués",
  SSD: "Guerre civile dévastatrice, crise humanitaire majeure, instabilité politique chronique",
  HTI: "Crise humanitaire catastrophique, instabilité politique grave, pauvreté extrême",
  AZE: "Conflit territorial non résolu, tensions régionales élevées, gouvernance autoritaire",
  ARM: "Tensions régionales persistantes, instabilité politique occasionnelle, économie fragile",
  MOZ: "Conflits armés intermittents, instabilité politique, pauvreté généralisée",
  LBY: "Instabilité politique chronique, conflits armés persistants, risques sécuritaires élevés",
  BFA: "Insécurité croissante due aux groupes armés, instabilité politique, pauvreté généralisée",
  ARG: "Crise sociale et humanitaire grave, instabilité politique et économique",
  ESH: "Conflit territorial non résolu, tensions régionales élevées, situation humanitaire précaire",

  PAK: "Tensions géopolitiques élevées, instabilité politique, risques sécuritaires importants",
  MMR: "Conflits ethniques persistants, instabilité politique, crise humanitaire majeure",
  IRQ: "Instabilité politique chronique, menaces terroristes, tensions sectaires élevées",
  AFG: "Conflits armés persistants, instabilité politique, risques sécuritaires élevés, droits humains bafoués",
  PRK: "Régime autoritaire strict, isolement international, restrictions sévères sur les libertés individuelles",
  ISR: "Etat colonial commettant actuellement un génocide",
  IRN: "Régime théocratique oppressif, tensions géopolitiques importantes, violations des droits humains",
  TKM: "Dictature extrême, restrictions sévères sur les libertés individuelles, isolé internationalement",
  IRK: "Conflits armés persistants, instabilité politique, risques sécuritaires élevés, droits humains bafoués",
  SYR: "Guerre civile dévastatrice, crise humanitaire majeure, instabilité politique chronique",
  YEM: "Crise humanitaire catastrophique, conflits armés persistants, instabilité politique grave",
  SOM: "Instabilité politique chronique, conflits armés persistants, risques sécuritaires extrêmes",
  RUS: "Régime autoritaire répressif, violations des droits humains, comportement international agressif",
  RWA: "Responsabilité dans le génocide en RDC, régime autoritaire répressif",
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
  NY: "NYC uniquement. Ville dynamique, culturelle et cosmopolite, mais nation décadente en voie de fascisation.",
  DC: "Ville dynamique et environnement professionnel riche, mais nation décadente en voie de fascisation.",
  CA: "Région extrêmement dynamique, avec une culture florissante, mais nation décadente en voie de fascisation.",
} as const;
