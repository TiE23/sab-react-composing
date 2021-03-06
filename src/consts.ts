import { ShirtSizesMap, FractionsMap, JustifyAlignMap, StretchMap } from "./types";

export const SPACING_MAP: ShirtSizesMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem",
};

export const FRACTIONS: FractionsMap = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const JUSTIFY_ALIGN_MAP: JustifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const STRETCH_MAP: StretchMap = {
  all: "> * { flex: 1 }",
  start: "> :first-child { flex: 1 }",
  end: "> :last-child { flex: 1 }",
};
