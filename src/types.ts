import type { StyleProps } from "@uiid/core/properties";
import { STYLE_PROPS, TOGGLE_PROPS } from "./constants";

export type TypographyBooleanProps = {
  [K in keyof typeof TOGGLE_PROPS]?: boolean;
};

export type TypographyStyleProps = StyleProps<typeof STYLE_PROPS>;
