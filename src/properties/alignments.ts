import type { StyleProp } from "@uiid/core";

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-align */
export const align = {
  property: "textAlign",
  values: ["left", "right", "center", "justify", "initial", "inherit"] as const,
} satisfies StyleProp;
