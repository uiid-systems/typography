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
  ...allProps
}: TextProps) => {
  const styles = styleProps(allProps, STYLE_PROPS);
  const variants = booleanProps(allProps, TOGGLE_PROPS);

  // Get arrays of keys to filter out
  const togglePropKeys = Object.keys(TOGGLE_PROPS) as Array<
    keyof typeof TOGGLE_PROPS
  >;
  const stylePropKeys = Object.keys(STYLE_PROPS) as Array<
    keyof typeof STYLE_PROPS
  >;

  // Create a copy of the props to modify
  const filteredProps: Record<string, unknown> = { ...allProps };

  // Remove toggle props
  togglePropKeys.forEach((key) => {
    if (key in filteredProps) {
      delete filteredProps[key as string];
    }
  });

  // Remove style props
  stylePropKeys.forEach((key) => {
    if (key in filteredProps) {
      delete filteredProps[key as string];
    }
  });

  const classNames = cx(
    allProps.className,
    render && render.props.className,
    size !== undefined && `size-${size}`,
    shade && `shade-${shade}`
  );

  const propsWithUiid = {
    "data-uiid-typography": "text",
    ...filteredProps,
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
