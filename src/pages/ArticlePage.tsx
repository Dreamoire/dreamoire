import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import { getArticleBySlug } from "../data/articles";
import "../styles/ArticlePage.css";

function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <p>Article introuvable</p>;
  }

  return (
    <main className="article-page">
      <article className="article">
        <div className="article__media">
          <img
            src={article.meta.cover}
            alt={article.meta.title}
            className="article__cover"
          />
        </div>

        <div className="article__body">
          <h1 className="article__title">{article.meta.title}</h1>
          <h2 className="article__subtitle">{article.meta.subtitle}</h2>
          <p className="article__intro">{article.meta.intro}</p>

          <div className="article__content">
           <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>
      </article>
    </main>
  );
}

export default ArticlePage;
