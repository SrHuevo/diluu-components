import type { Meta, StoryObj } from '@storybook/react';

import TeamSection from "../components/organisms/TeamSection/TeamSection"
import { imgs } from "./assets/imgs/imgs.ts"
import { icons } from "../assets/icons/icons.ts";

const meta = {
    title: 'team section',
    component: TeamSection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TeamSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Nuestros profesores",
        aboutTitle: "2000+",
        aboutSubtitle: "profesores",
        teamList: [
            {
                image: imgs.TeamImage1,
                name: "Marcela Carrillo",
                flag: icons.MexicoFlag,
                country: 'México',
                description: "10 años de experiencia"
            },
            {
                image: imgs.TeamImage2,
                name: "Another Teacher",
                flag: icons.GuatemalaFlag,
                country: 'Guatemala',
                description: "5 years of description"
            },
            {
                image: imgs.TeamImage3,
                name: "Marcela Carrillo",
                flag: icons.EspanaFlag,
                country: 'España',
                description: "10 años de experiencia"
            },
            {
                image: imgs.TeamImage4,
                name: "Another Teacher",
                flag: icons.ColombiaFlag,
                country: 'Colombia',
                description: "5 years of description"
            },
            {
                image: imgs.TeamImage5,
                name: "Marcela Carrillo",
                flag: icons.ArgentinaFlag,
                country: 'Argentina',
                description: "10 años de experiencia"
            },
        ],
        aboutList: [
            {
                icon: icons.ScreenIcon,
                description: "Profesores nativos y con el inglés como segunda lengua con experiencia en la enseñanza a los más jóvenes",
                color: "#ff9331"
            },
            {
                icon: icons.LampIcon,
                description: "Docentes con diplomas y certificados internacionales de docencia: TEFL, TESOL, TEYL, CELTA, DELTA, TKT.",
                color: "#f5d057"

            },
            {
                icon: icons.CertificateIcon,
                description: "Los profesores participan en programas mensuales para continuar con su desarrollo profesional",
                color: "#e465f2"
            },
            {
                icon: icons.AbcIcon,
                description: "Profesionales apasionados que le abrirán al niño/a el emocionante mundo de la lengua inglesa",
                color: "#3ccb09"
            },
        ]
    },
};
