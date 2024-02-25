import TeacherCard from "@/components/molecules/TeacherCard/TeacherCard";
import { images } from "@/variables/images";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "teacher card",
  component: TeacherCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TeacherCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 1,
    country: "MX",
    name: "Marcela Carrillo",
    subtitle: "10 años de experiencia",
    avatar: images.Teacher1,
    topColor: "#E465F2",
    bottomColor: "#FF9331",
  },
};
