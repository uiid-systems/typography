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
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Text {...args} render={<h1 />}>
        LEVEL=5. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h2 />}>
        LEVEL=4. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h3 />}>
        LEVEL=3. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h4 />}>
        LEVEL=2. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h5 />}>
        LEVEL=1. Lorem ipsum dolor sit amet.
      </Text>
      <Text {...args} render={<h6 />}>
        LEVEL=0. Lorem ipsum dolor sit amet.
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
    </div>
  ),
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Text",
};
