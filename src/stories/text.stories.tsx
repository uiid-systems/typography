import type { Meta, StoryObj } from "@storybook/react";
import type { TogglePropsArray } from "@uiid/style-props";

import { Text } from "../components/text";
import { TOGGLE_PROPS } from "../constants";

/** @todo move somewhere else? */
function generateToggleArgs(toggleProps: TogglePropsArray) {
  const toggleArgs: Partial<{ [K in (typeof toggleProps)[number]]: false }> =
    {};

  for (const arg of toggleProps) {
    toggleArgs[arg] = false;
  }

  return toggleArgs;
}

const meta = {
  title: "Text",
  component: Text,
  args: generateToggleArgs(TOGGLE_PROPS),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Levels: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Text {...args} level={0}>
        LEVEL 0
      </Text>
      <Text {...args} level={1}>
        LEVEL 1
      </Text>
      <Text {...args} level={2}>
        LEVEL 2
      </Text>
      <Text {...args} level={3}>
        LEVEL 3
      </Text>
      <Text {...args} level={4}>
        LEVEL 4
      </Text>
      <Text {...args} level={5}>
        LEVEL 5
      </Text>
      <Text {...args} level={6}>
        LEVEL 6
      </Text>
      <Text {...args} level={7}>
        LEVEL 7
      </Text>
      <Text {...args} level={8}>
        LEVEL 8
      </Text>
    </div>
  ),
};

export const Shades: Story = {
  args: {
    level: 3,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Text {...args} shade="negative">
        NEGATIVE
      </Text>
      <Text {...args} shade="pressing">
        PRESSING
      </Text>
      <Text {...args} shade="cautious">
        CAUTIOUS
      </Text>
      <Text {...args} shade="positive">
        POSITIVE
      </Text>
      <Text {...args} shade="informative">
        INFORMATIVE
      </Text>
      <Text {...args} shade="background">
        BACKGROUND
      </Text>
      <Text {...args} shade="muted">
        MUTED
      </Text>
      <Text {...args} shade="halftone">
        HALFTONE
      </Text>
      <Text {...args} shade="accent">
        ACCENT
      </Text>
      <Text {...args} shade="foreground">
        FOREGROUND
      </Text>
    </div>
  ),
};

export const Paragraph: Story = {
  args: {
    level: 3,
  },
  render: (args) => (
    <Text {...args} render={<p />} style={{ maxWidth: 720 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis
      magni magnam facere quod accusantium dolorum minima aspernatur totam
      beatae? Harum eum rerum enim aliquam. Magnam dolorem, praesentium quisquam
      neque nulla fuga maiores laudantium vero obcaecati repellendus eligendi!
      Aspernatur tenetur maxime earum repudiandae aliquam excepturi placeat quas
      quidem eaque facilis sequi velit cupiditate accusantium consectetur
      voluptatem, quasi odio amet quam doloremque cum illo assumenda. Quibusdam,
      amet aliquid. Ipsa autem quae odit, eum dolore fuga, nihil laudantium
      repellendus adipisci reiciendis sint.
    </Text>
  ),
};
