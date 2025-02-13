import {
  cx,
  booleanProps,
  styleProps,
  type StyleProps,
  type RenderProp,
} from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as properties from "../properties";

import type { VariantProps } from "../types";

export type TextProps = {
  render?: (() => RenderProp) | RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  StyleProps<typeof properties> &
  VariantProps;

export const Text = ({
  block,
  bold,
  capitalize,
  hidden,
  inline,
  interactive,
  italic,
  lowercase,
  truncate,
  uppercase,
  render,
  className,
  style,
  children,
  ...props
}: TextProps) => {
  const element = typeof render === "function" ? render() : render;
  const styles = { ...styleProps(props, properties), ...style };
  const variants = booleanProps({
    block,
    bold,
    capitalize,
    hidden,
    inline,
    interactive,
    italic,
    lowercase,
    truncate,
    uppercase,
  });

  if (isValidElement(element)) {
    return cloneElement(element, {
      ...props,
      children: children ?? element.props.children,
      className: cx(variants, className, element.props.className),
      style: styles,
    });
  }

  return (
    <div
      data-uiid-typography="text"
      className={cx(variants, className)}
      style={styles}
      {...props}
    >
      {children}
    </div>
  );
};
