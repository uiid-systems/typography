import { cx, booleanProps, styleProps, type RenderProp } from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import { SIZES, SHADES, STYLE_PROPS, TOGGLE_PROPS } from "../constants";
import type { TypographyBooleanProps, TypographyStyleProps } from "../types";

export type TextProps = React.HTMLAttributes<HTMLSpanElement> &
  React.PropsWithChildren &
  TypographyBooleanProps &
  TypographyStyleProps & {
    render?: RenderProp;
    ref?: React.Ref<any>;
    size?: (typeof SIZES)[number];
    shade?: (typeof SHADES)[number];
  };

export const Text = ({
  render,
  size,
  shade,
  children,
  ...props
}: TextProps) => {
  const styles = styleProps(props, STYLE_PROPS);
  const variants = booleanProps(props, TOGGLE_PROPS);

  const classNames = cx(
    props.className,
    render && render.props.className,
    size !== undefined && `size-${size}`,
    shade && `shade-${shade}`
  );

  const propsWithUiid = {
    "data-uiid-typography": "text",
    ...props,
    style: { ...styles, ...variants },
    className: classNames,
  };

  if (isValidElement(render)) {
    return cloneElement(render, {
      ...propsWithUiid,
      children: children ?? render.props.children,
    });
  }

  return <span {...propsWithUiid}>{children}</span>;
};

Text.displayName = "Text";
