import ClasesCountSection from "@/components/organisms/ClasesCountSection/ClasesCountSection";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "clases count section",
  component: ClasesCountSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClasesCountSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Clases realizadas!",
    subtitle: "17,894,732",
  },
};
