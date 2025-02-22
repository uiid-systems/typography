import {
  ta,
  display,
  opacity,
  overflow,
  spacing,
  visibility,
} from "@uiid/style-props/styles";
import {
  bold,
  capitalize,
  disabled,
  hidden,
  inactive,
  italic,
  lowercase,
  truncate,
  underline,
  uppercase,
} from "@uiid/style-props/toggles";

export const STYLE_PROPS = {
  ta,
  display,
  opacity,
  overflow,
  visibility,
  ...spacing,
};
export const TOGGLE_PROPS = {
  bold,
  capitalize,
  disabled,
  hidden,
  inactive,
  italic,
  lowercase,
  truncate,
  underline,
  uppercase,
};

export const SIZES = [0, 1, 2, 3, 4, 5] as const;

export const SHADES = [
  "positive",
  "negative",
  "cautious",
  "muted",
  "subtle",
] as const;
