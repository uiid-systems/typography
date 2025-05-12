import { type TogglePropsArray } from "@uiid/style-props";

export const TOGGLE_PROPS = [
  "bold",
  "capitalize",
  "disabled",
  "hidden",
  "italic",
  "lowercase",
  "truncate",
  "underline",
  "uppercase",
] as const satisfies TogglePropsArray;

export const LEVELS = [1, 2, 3, 4, 5, 6] as const;

export const SHADES = [
  "positive",
  "negative",
  "cautious",
  "pressing",
  "informative",
  "muted",
  "accent",
  "halftone",
] as const;
