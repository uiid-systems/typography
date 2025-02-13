export type RenderProp = React.ReactElement<
  React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>
>;

export type VariantProps = {
  block?: boolean;
  bold?: boolean;
  capitalize?: boolean;
  hidden?: boolean;
  inline?: boolean;
  interactive?: boolean;
  italic?: boolean;
  lowercase?: boolean;
  truncate?: boolean;
  uppercase?: boolean;
};
