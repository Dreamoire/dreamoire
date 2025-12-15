import GraphicsCarousel from "../components/GraphicsCarousel";
import ArticlePreviewCard from "../components/ArticlePreviewCard";
import ProjectCarousel from "../components/ProjectCarousel";
import "../styles/Home.css";

function Home() {
  return (
    <main className="home-page page-container">
      <section className="section home-section">
        <h2 className="section-title">Projets</h2>
        <ProjectCarousel />
      </section>

      <section className="section home-section">
        <h2 className="section-title">Derniers articles</h2>
        <ArticlePreviewCard />
      </section>

      <section className="section home-section">
        <h2 className="section-title">Créations visuelles</h2>
        <GraphicsCarousel />
      </section>
    </main>
  );
}

export default Home;
