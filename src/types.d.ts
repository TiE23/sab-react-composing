export type ShirtSizes =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl";

export type ShirtSizesMap = {[key in ShirtSizes]: string};
