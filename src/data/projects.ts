// src/data/projects.ts
import projetCard1 from "../assets/images/vostok-express.jpg";
import projetCard2 from "../assets/images/herbier-de-claire.jpg";
import projetCard3 from "../assets/images/chromosphere.jpg";
import projetCard4 from "../assets/images/time-to-eat.jpg";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  imageSrc: string;
  slug: string;
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
    {
    id: "proj-4",
    title: "No Time To Eat",
    shortDescription: "Recherche de recettes avec filtres et calories.",
    imageSrc: projetCard4,
    slug: "no-time-to-eat",
    repoUrl: "https://github.com/Dreamoire/no-time-to-eat",
    liveUrl: "https://no-time-to-eat.vercel.app/",
  },

  {
    id: "proj-2",
    title: "L’Herbier de Claire",
    shortDescription: "Recettes inspirées d’Outlander, herboristerie et cuisine.",
    imageSrc: projetCard2,
    slug: "claires-remedies",
    repoUrl: "https://github.com/Dreamoire/herbier-de-claire",
    liveUrl: "https://dreamoire.github.io/herbier-de-claire/",
  },
  {
    id: "proj-3",
    title: "Chromosphère",
    shortDescription: "Générateur de palettes en React + API",
    imageSrc: projetCard3,
    slug: "chromosphere",
    repoUrl: "https://github.com/Dreamoire/SoloRushReact",
    liveUrl: "https://dreamoire.github.io/SoloRushReact/",
  },
    {
    id: "proj-1",
    title: "Vostok Express",
    shortDescription: "Application React pour explorer la vie de mon sheltie.",
    imageSrc: projetCard1,
    slug: "vostok-express",
    
  },

];
