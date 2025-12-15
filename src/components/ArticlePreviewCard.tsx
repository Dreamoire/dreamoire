import { Link } from "react-router-dom";
import { latestArticles } from "../data/articles";
import "../styles/ArticlePreviewCard.css";

function ArticlePreviewCard() {
  const latest = latestArticles(4);

  return (
    <section className="article-preview-card" aria-label="Derniers articles">
      <div className="article-preview-card__grid">
        {latest.map((a) => (
          <article key={a.slug} className="article-preview-card__item">
            <div className="article-preview-card__content">
              <h3 className="article-preview-card__title">
                <Link
                  className="article-preview-card__link"
                  to={`/articles/${a.slug}`}
                >
                  {a.meta.title}
                </Link>
              </h3>

              <p className="article-preview-card__date">{a.meta.date}</p>
              <p className="article-preview-card__intro">{a.meta.intro}</p>
            </div>

            <div className="article-preview-card__media">
              {a.meta.cover ? (
                <img
                  className="article-preview-card__image"
                  src={a.meta.cover}
                  alt={`Illustration — ${a.meta.title}`}
                  loading="lazy"
                />
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ArticlePreviewCard;
