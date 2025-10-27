export const mapCategories = [
  { id: "priority", label: "Prioritaire", color: "#4F46E5" },
  { id: "interesting", label: "Int\u00e9ressant", color: "#10B981" },
  { id: "curiosity", label: "Curiosit\u00e9", color: "#F59E0B" },
  { id: "unlikely", label: "Moins probable", color: "#EF4444" },
  { id: "no", label: "Non", color: "#000000" }
] as const;

export const countryColors = {
  FRA: "#4F46E5",
  DEU: "#F59E0B",
  ESP: "#10B981",
  UZB: "#4F46E5",
  PRK: "#000000",
  IRN: "#000000",
  AFG: "#000000",
  PSE: "#4F46E5",
  TWN: "#4F46E5",
  ESH: "#F59E0B",
  USA: "#ffffff00"
} as const;

export const stateColors = {
  CA: "#EF4444",
  TX: "#10B981",
  NY: "#4F46E5",
  FL: "#F59E0B"
} as const;

export const DEFAULT_FILL_COLOR = "#e5e7eb";
