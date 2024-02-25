import FeatureCard from "@/components/molecules/FeatureCard/FeatureCard";
import { icons } from "@/variables/icons";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "feature card",
  component: FeatureCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "Profesores nativos y con el inglés como segunda lengua con experiencia en la enseñanza a los más jóvenes",
    color: "#FF9331",
    icon: icons.About1Icon,
  },
};
