import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components/text";

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
      <Text {...args}>Lorem ipsum dolor sit amet.</Text>
      <Text {...args} shade="positive" level={3}>
        yay
      </Text>
    </div>
  ),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
};
