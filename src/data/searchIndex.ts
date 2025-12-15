export interface SearchItem {
  id: string;
  type: "project" | "article" | "page";
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  {
    id: "home",
    type: "page",
    title: "Accueil",
    description: "Page principale du portfolio",
    path: "/",
    keywords: ["home", "accueil", "main", "portfolio"],
  },
  {
    id: "projets",
    type: "page",
    title: "Projets",
    description: "Liste des projets",
    path: "/projets",
    keywords: ["react", "projet", "portfolio"],
  },

  // … когда создашь реальные проекты и статьи — добавим их сюда
];
