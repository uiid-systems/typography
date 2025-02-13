import type { StyleProp } from "@uiid/core";

/** @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap */
export const wrap = {
  property: "textWrap",
  values: ["wrap", "nowrap", "balance", "pretty", "stable"] as const,
} satisfies StyleProp;
