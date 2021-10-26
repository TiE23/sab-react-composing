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

export type JustifyAlignProps =
  | "start"
  | "end"
  | "center";

export type JustifyAlignMap = {[key in JustifyAlignProps]: string};

export type StretchProps =
  | "all"
  | "start"
  | "end";

export type StretchMap = {[key in StretchProps]: string};
