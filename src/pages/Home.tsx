import GraphicsCarousel from "../components/GraphicsCarousel";
import ProjectCarousel from "../components/ProjectCarousel.tsx";
import "../styles/Home.css"; 

function Home() {
  return (
    <div className="home-page">
      <section className="section home-section">
        <h2 className="section-title">Projets</h2>
        <ProjectCarousel />
      </section>
      <section className="section home-section">
  <h2 className="section-title">Créations visuelles</h2>
  <GraphicsCarousel />
</section>
    </div>
  );
}

export default Home;