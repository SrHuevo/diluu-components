import type { Meta, StoryObj } from '@storybook/react';

import WhySection from "../components/organisms/WhySection/WhySection.tsx"
import {imgs} from "./assets/imgs/imgs.ts"

const meta = {
  title: 'why section',
  component: WhySection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WhySection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "¿Por qué Diluu?",
    slides: [
      {
        image: imgs.CarouselImage1,
        title: "Se lo pasan en grande",
        description:
            "Cuando los niños disfrutan mientras aprenden, se crean conexiones emocionales y positivas con el idioma. Esto hace que el aprendizaje sea más efectivo y duradero.",
      },
      {
        image: imgs.CarouselImage2,
            title: "Amigos de todo el mundo",
          description:
        "En Diluu, en nuestros grupos reducidos, tus hijos harán amigos de diferentes partes del mundo con quienes podrán practicar español. Esta experiencia los motiva a seguir mejorando",
      },
      {
        image: imgs.CarouselImage3,
            title: "Los mejores profesores",
          description:
        "Nuestros profesores son nativos, apasionados por enseñar a los más pequeños, y reciben formación continua. Su experiencia y dedicación aseguran un aprendizaje de calidad.",
      },
      {
        image: imgs.CarouselImage4,
            title: "Comodidad desde casa",
          description:
        "Nuestras clases en línea permiten que tus hijos se sientan cómodos y relajados mientras aprenden, además de ahorrarte desplazamientos.",
      },
      {
        image: imgs.CarouselImage5,
            title: "Adaptadas a su nivel y edad",
          description:
        "Tanto si tu hijo está dando sus primeros pasos en el aprendizaje del idioma como si busca fortalecer sus habilidades, ofrecemos niveles adaptados a su nivel y edad.",
      },
      {
        image: imgs.CarouselImage6,
            title: "Clases progresivas",
          description:
        "En cada trimestre cubrimos unos objetivos de aprendizaje concretos. Al finalizar el curso, los estudiantes reciben un diploma con sus logros y los padres reciben un informe con sugerencias para seguir avanzando y feedback del profesor.",
      },
    ],
  },
};
