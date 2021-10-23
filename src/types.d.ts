export type ShirtSizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

export type ShirtSizesMap = {[key in ShirtSizes]: string};

export type Fractions =
  | "1/4"
  | "1/3"
  | "1/2"
  | "2/3"
  | "3/4"
  | "auto-start"
  | "auto-end";

export type FractionsMap = {[key in Fractions]: string};
