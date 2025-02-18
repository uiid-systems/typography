import { cx, booleanProps, styleProps, type RenderProp } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import { STYLE_PROPS, TOGGLE_PROPS } from "../constants";
import type { TypographyBooleanProps, TypographyStyleProps } from "../types";

export type TextProps = React.HTMLAttributes<HTMLSpanElement> &
  React.PropsWithChildren &
  TypographyBooleanProps &
  TypographyStyleProps & {
    render?: RenderProp;
    ref?: React.Ref<any>;
  };

export const Text = ({ render, children, ...props }: TextProps) => {
  const styles = styleProps(props, STYLE_PROPS);
  const variants = booleanProps(props, TOGGLE_PROPS);

  const propsWithUiid = {
    "data-uiid-typography": "text",
    ...props,
    style: { ...styles, ...variants },
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
      className: cx(props.className, render.props.className),
    });
  }

  return <div {...propsWithUiid}>{children}</div>;
};

Text.displayName = "Text";
