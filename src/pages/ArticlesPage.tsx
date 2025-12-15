import { Link } from "react-router-dom";
import { allArticles } from "../data/articles";
import "../styles/ArticlesPage.css";

function ArticlesPage() {
  return (
    <main className="articles-page">
      <header className="articles-page__header">
        <h2 className="articles-page__title">Articles</h2>
       
      </header>

      <section className="articles-list" aria-label="Liste des articles">
        {allArticles.map((a) => (
          <article key={a.slug} className="articles-list__item">
            <Link to={`/articles/${a.slug}`} className="articles-list__link">
              <img
                src={a.meta.cover}
                alt={a.meta.title}
                className="articles-list__image"
                loading="lazy"
              />

              <div className="articles-list__content">
                <h3 className="articles-list__item-title">{a.meta.title}</h3>
                <p className="articles-list__date">{a.meta.date}</p>
                <p className="articles-list__intro">{a.meta.intro}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ArticlesPage;
