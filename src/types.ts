import type {
  ToggleProps,
  SpacingProps,
  TypographyProps,
} from "@uiid/style-props";

import { TOGGLE_PROPS, LEVELS, SHADES } from "./constants";

export type TypographyNativeProps = Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  keyof ToggleProps
>;

export type TypographyStyleProps = SpacingProps & TypographyProps;

export type TypographyToggleProps = Pick<
  ToggleProps,
  (typeof TOGGLE_PROPS)[number]
>;

export type TypographyLevelProps = (typeof LEVELS)[number];
export type TypographyShadeProps = (typeof SHADES)[number];
