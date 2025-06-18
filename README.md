# @uiid/typography

React Typography Components

## Installation

Install the core package and its style dependencies:

```bash
npm install @uiid/typography @uiid/core @uiid/style-props
# or
pnpm add @uiid/typography @uiid/core @uiid/style-props
```

## Styles

Import the bundled CSS to enable design tokens and default styles:

```js
import "@uiid/typography/styles.css";
```

## Usage

Import and use the `Text` component in your React application:

```tsx
import React from "react";
import "@uiid/typography/styles.css";
import { Text } from "@uiid/typography";

function App() {
  return (
    <>
      <Text level={3} shade="positive" bold>
        Positive Bold Text
      </Text>
    </>
  );
}
```

## Text Component

The `Text` component provides a unified API for rendering text with:

- **Levels**: Predefined typography scales (font-size, line-height).
- **Shades**: Semantic colors (positive, negative, neutral, etc.).
- **Style Props**: Margin, padding, fontSize, textAlign, color, and more via `@uiid/style-props`.
- **Toggle Props**: Common text toggles like `bold`, `italic`, `underline`, `truncate`, and `hidden`.
- **Custom Render**: Change the underlying HTML tag (e.g., `<p />`, `<h1 />`).

### Props

| Name                 | Type                                                                                                                                     | Default     | Description                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| `children`           | `React.ReactNode`                                                                                                                        |             | Content to be displayed within the text element.              |
| `level`              | `0  1  2  3  4  5  6  7  8`                                                                                                      | `undefined` | Predefined typography level corresponding to design tokens.   |
| `shade`              | `'positive'  'negative'  'cautious'  'pressing'  'informative'  'muted'  'accent'  'halftone'  'foreground'  'background'`      | `undefined` | Semantic color shade to apply to the text.                    |
| `render`             | `React.ReactElement`                                                                                                                     | `<span />`  | Custom element to render (e.g., `<p />`, `<h1 />`).           |
| **Style Props**      | `SpacingProps` & `TypographyProps` (from `@uiid/style-props`)<br/>Includes margin, padding, fontSize, lineHeight, textAlign, color, etc. |             | A variety of CSS-in-JS style props for layout and typography. |
| **Toggle Props**     | `bold`<br/>`italic`<br/>`underline`<br/>`uppercase`<br/>`lowercase`<br/>`capitalize`<br/>`truncate`<br/>`hidden`<br/>`disabled`          | `false`     | Boolean flags for common text styles and behaviors.           |
| `className`          | `string`                                                                                                                                 |             | Additional CSS class names to apply.                          |
| `style`              | `React.CSSProperties`                                                                                                                    |             | Inline style overrides.                                       |
| ...native span props | `React.HTMLAttributes<HTMLSpanElement>`                                                                                                  |             | All other standard HTML attributes (e.g., `id`, `onClick`).   |

> **Note**: The component automatically applies a `uiid="text"` attribute for internal theming.

## Examples

### Levels Demo

```tsx
import React from "react";
import { Text } from "@uiid/typography";

export function LevelsExample() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => (
        <Text key={lvl} level={lvl}>
          Level {lvl}
        </Text>
      ))}
    </div>
  );
}
```

### Shades Showcase

```tsx
import React from "react";
import { Text } from "@uiid/typography";

export function ShadesExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Text level={3} shade="negative">
        Negative
      </Text>
      <Text level={3} shade="pressing">
        Pressing
      </Text>
      <Text level={3} shade="cautious">
        Cautious
      </Text>
      <Text level={3} shade="positive">
        Positive
      </Text>
      <Text level={3} shade="informative">
        Informative
      </Text>
      <Text level={3} shade="muted">
        Muted
      </Text>
      <Text level={3} shade="halftone">
        Halftone
      </Text>
      <Text level={3} shade="accent">
        Accent
      </Text>
      <Text level={3} shade="foreground">
        Foreground
      </Text>
      <Text level={3} shade="background">
        Background
      </Text>
    </div>
  );
}
```

### Custom Render Example

```tsx
import React from "react";
import { Text } from "@uiid/typography";

export function ParagraphExample() {
  return (
    <Text level={3} render={<p />} style={{ maxWidth: 720 }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit...
    </Text>
  );
}
```

## Contributing

Contributions and feedback are welcome! Please open an issue or pull request on the [GitHub repository](https://github.com/uiid-systems/typography).

## License

This project is licensed under the MIT License.
