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
  TypographyLevelProps,
  TypographyShadeProps,
} from "../types";
import { TOGGLE_PROPS, UIID } from "../constants";

export type TextProps = React.PropsWithChildren<{
  render?: RenderProp;
  ref?: React.Ref<any>;
  level?: TypographyLevelProps;
  shade?: TypographyShadeProps;
  uiid?: string;
  uiidtype?: string;
}> &
  TypographyNativeProps &
  TypographyStyleProps &
  TypographyToggleProps;

export const Text = ({ render, children, ...props }: TextProps) => {
  const toggleAttrs = extractToggleAttributes(props, TOGGLE_PROPS);
  /** @todo fix types */
  const styleAttrs = extractStyleAttributes(props, STYLE_PROPS as any);

  const propsWithUiid = {
    ...props,
    uiid: UIID,
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
