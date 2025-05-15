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
  title: "Primitives/Text",
  component: Text,
  args: generateToggleArgs(TOGGLE_PROPS),
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Text {...args} level={8}>
        LEVEL 8
      </Text>
      <Text {...args} level={7}>
        LEVEL 7
      </Text>
      <Text {...args} level={6}>
        LEVEL 6
      </Text>
      <Text {...args} level={5}>
        LEVEL 5
      </Text>
      <Text {...args} level={4}>
        LEVEL 4
      </Text>
      <Text {...args} level={3}>
        LEVEL 3
      </Text>
      <Text {...args} level={2}>
        LEVEL 2
      </Text>
      <Text {...args} level={1}>
        LEVEL 1
      </Text>
      <Text {...args} level={0}>
        LEVEL 0
      </Text>

      <hr style={{ width: "100%" }} />

      <Text {...args} shade="positive">
        SHADE=POSITIVE. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="negative">
        SHADE=NEGATIVE. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="cautious">
        SHADE=CAUTIOUS. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="pressing">
        SHADE=PRESSING. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="informative">
        SHADE=INFORMATIVE. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="muted">
        SHADE=MUTED. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="halftone">
        SHADE=HALFTONE. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} shade="accent">
        SHADE=ACCENT. Lorem ipsum dolor sit amet.
      </Text>

      <hr style={{ width: "100%" }} />

      <Text {...args} render={<p />} style={{ maxWidth: 480 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        officiis magni magnam facere quod accusantium dolorum minima aspernatur
        totam beatae? Harum eum rerum enim aliquam. Magnam dolorem, praesentium
        quisquam neque nulla fuga maiores laudantium vero obcaecati repellendus
        eligendi! Aspernatur tenetur maxime earum repudiandae aliquam excepturi
        placeat quas quidem eaque facilis sequi velit cupiditate accusantium
        consectetur voluptatem, quasi odio amet quam doloremque cum illo
        assumenda. Quibusdam, amet aliquid. Ipsa autem quae odit, eum dolore
        fuga, nihil laudantium repellendus adipisci reiciendis sint.
      </Text>
    </div>
  ),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
};
