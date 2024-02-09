import type { Meta, StoryObj } from '@storybook/react';

import CountSection from "../components/organisms/CountSection/CountSection.tsx"

const meta = {
  title: 'count section',
  component: CountSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Clases realizadas!",
    count: 17894732,
  },
};
