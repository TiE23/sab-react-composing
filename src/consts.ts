import { ShirtSizesMap, FractionsMap, JustifyAlignMap } from "./types";

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
  "3/4": "3efr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export const JUSTIFY_ALIGN_MAP: JustifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};
