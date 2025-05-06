import { cx, type RenderProp } from "@uiid/core";
import {
  extractStyleAttributes,
  extractToggleAttributes,
} from "@uiid/style-props";
import * as STYLE_PROPS from "@uiid/style-props/styles";
import { isValidElement, cloneElement } from "react";

import type {
  TypographyNativeProps,
  TypographyStyleProps,
  TypographyToggleProps,
  TypographyUiidProps,
  TypographyLevelProps,
  TypographyShadeProps,
} from "../types";
import { TOGGLE_PROPS } from "../constants";

export type TextProps = React.PropsWithChildren<{
  render?: RenderProp;
  ref?: React.Ref<any>;
  level?: TypographyLevelProps;
  shade?: TypographyShadeProps;
}> &
  TypographyNativeProps &
  TypographyStyleProps &
  TypographyToggleProps &
  TypographyUiidProps;

export const Text = ({ render, children, ...props }: TextProps) => {
  const toggleAttrs = extractToggleAttributes(props, TOGGLE_PROPS);
  /** @todo fix types */
  const styleAttrs = extractStyleAttributes(props, STYLE_PROPS as any);

  const propsWithUiid = {
    uiid: "text",
    uiid_cat: "typography",
    ...props,
    style: { ...props.style, ...styleAttrs },
    ...toggleAttrs,
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
      className: cx(props.className, render.props.className),
    });
  }

  return <span {...propsWithUiid}>{children}</span>;
};
Text.displayName = "Text";
