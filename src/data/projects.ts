// src/data/projects.ts
import projetCard1 from "../assets/images/thumb-vostok-express.jpg";
import projetCard2 from "../assets/images/thumb-herbier.jpg";
import projetCard3 from "../assets/images/thumb-chromosphere.jpg";
import projetCard4 from "../assets/images/thumb-time-to-eat.jpg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  imageSrc: string;
  slug: string; 
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Vostok Express",
    shortDescription: "Application React pour explorer la vie de mon sheltie.",
    imageSrc: projetCard1,
    slug: "vostok-express",
  },

  {
    id: "proj-2",
    title: "L’Herbier de Claire",
    shortDescription: "Recettes inspirées d’Outlander",
    imageSrc: projetCard2,
    slug: "claires-remedies",
  },
    {
    id: "proj-3",
    title: "Chromosphère",
    shortDescription: "Générateur de palettes en React + API",
    imageSrc: projetCard3,
    slug: "dreamoire-portfolio",
  },

    {
    id: "proj-4",
    title: "No Time To Eat",
    shortDescription: "Recherche de recettes avec filtres et calories.",
    imageSrc: projetCard4,
    slug: "no-time-to-eat",
  },
];
