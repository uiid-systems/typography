import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../components/text";

const meta = {
  title: "Primitives/Text",
  component: Text,
  args: {
    block: false,
    bold: false,
    capitalize: false,
    hidden: false,
    inline: false,
    interactive: false,
    italic: false,
    lowercase: false,
    truncate: false,
    uppercase: false,
  },
  render: (args) => (
    <Text {...args} style={{ color: "tomato" }}>
      <strong>Lorem</strong> <em>ipsum</em> dolor sit amet.
    </Text>
  ),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
};
