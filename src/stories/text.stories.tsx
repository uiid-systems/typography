import type { Meta, StoryObj } from "@storybook/react";
import {
  disableArgTypes,
  convertStylePropertiesToArgTypes,
} from "@uiid/core/storybook";

import { Text } from "../components/text";
import { STYLE_PROPS } from "../constants";

const meta = {
  title: "Primitives/Text",
  component: Text,
  args: {
    bold: false,
    capitalize: false,
    hidden: false,
    italic: false,
    lowercase: false,
    truncate: false,
    uppercase: false,
  },
  argTypes: {
    ...disableArgTypes("render", "ref"),
    ...convertStylePropertiesToArgTypes(STYLE_PROPS, "Style\xa0Properties"),
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Text {...args} render={<h1 />}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h2 />}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h3 />}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h4 />}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h5 />}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<p />}>
        Lorem ipsum dolor sit amet.
      </Text>

      <Text shade="positive" {...args} size={5}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text shade="cautious" {...args} size={4}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text shade="negative" {...args} size={3}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text shade="muted" {...args} size={2}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text shade="subtle" {...args} size={1}>
        Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} size={0}>
        Lorem ipsum dolor sit amet.
      </Text>
    </div>
  ),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
};
