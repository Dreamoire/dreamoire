import matter from "gray-matter";

export type ArticleMeta = {
  title: string;
  subtitle: string;
  date: string; 
  intro: string;
  cover: string; 
};

export type Article = {
  slug: string; 
  meta: ArticleMeta;
  content: string; 
};

type RawModule = {
  default: string;
};

const mdModules = import.meta.glob<RawModule>(
  "../content/articles/**/index.md",
  { eager: true, query: "?raw" },
);

const coverModules = import.meta.glob<{ default: string }>(
  "../content/articles/**/cover.*",
  { eager: true },
);

const coverUrlByFolder = new Map<string, string>();

for (const [path, mod] of Object.entries(coverModules)) {
  // path: ../content/articles/<slug>/cover.jpg
  const slug = path.split("/articles/")[1]?.split("/cover.")[0];
  if (slug) coverUrlByFolder.set(slug, mod.default);
}

const articles: Article[] = Object.entries(mdModules).map(([path, mod]) => {

  const slug = path.split("/articles/")[1]?.split("/index.md")[0] ?? path;

  const parsed = matter(mod.default);
  const data = parsed.data as Partial<Omit<ArticleMeta, "cover">> & {
    cover?: string;
  };

  const cover = coverUrlByFolder.get(slug) ?? "";

  return {
    slug,
    meta: {
      title: data.title ?? slug,
      subtitle: data.subtitle ?? "",
      date: data.date ?? "1970-01-01",
      intro: data.intro ?? "",
      cover,
    },
    content: parsed.content.trim(),
  };
});

export const allArticles = articles
  .slice()
  .sort(
    (a, b) =>
      new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
  );

export const latestArticles = (count: number) => allArticles.slice(0, count);

export const getArticleBySlug = (slug: string) =>
  allArticles.find((a) => a.slug === slug);
