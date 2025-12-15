// src/pages/CvPage.tsx
import photo from "../assets/images/yuliana-krasulya.jpg";
import "../styles/CvPage.css";

export default function CvPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="cv-page">
      <div className="cv-page__wrapper">
        <header className="cv-header">
          <div className="cv-header__top">
            <section className="cv-header__titles">
              <h1 className="cv-title">Yuliana Krasulya</h1>
              <h2 className="cv-job">Développeur web (en formation)</h2>
            </section>
          </div>

          <address className="cv-contact">
            <div className="cv-contact__text">
              <img
                className="cv-contact__photo"
                src={photo}
                alt="Photo de Yuliana Krasulya"
              />

              <p>Mobilité : Paris, Juvisy-sur-Orge</p>
              <p>
                Tél. : <span className="cv-phone-strong">07 68 91 45 77</span>
              </p>
              <p>
                Email :{" "}
                <a href="mailto:krasulyayuliana@gmail.com">
                  krasulyayuliana@gmail.com
                </a>
              </p>
              <p>
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/yuliana-krasulya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  yuliana-krasulya
                </a>
              </p>
              <p>
                GitHub :{" "}
                <a
                  href="https://github.com/Dreamoire/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Dreamoire
                </a>
              </p>

              <button
                className="cv-download-btn"
                type="button"
                onClick={handlePrint}
              >
                Télécharger le CV en PDF
              </button>
            </div>
          </address>

          <section className="cv-profile">
            <p>
              Ancienne artiste et maquettiste, j’ai développé une maîtrise
              visuelle, un sens esthétique affirmé, une attention au détail et une
              créativité solide. Ma déficience auditive a renforcé mon sens de
              l’observation et ma précision visuelle, des qualités que j’applique
              désormais au développement web.
            </p>
            <p>
              En tant qu’apprenti développeur, je m’engage à apporter fiabilité,
              rigueur, constance et sens du travail bien fait. J’ai choisi ce
              métier parce qu’il réunit ce qui me motive profondément : créer,
              analyser et collaborer. Le développement web est pour moi une voie
              d’évolution durable.
            </p>
            <p>
              La Wild Code School m’offre un cadre d’apprentissage exigeant que
              je renforce par une pratique régulière. Nous y développons le
              travail d’équipe, la communication et les méthodes pro — des
              compétences qui me préparent à m’intégrer rapidement et
              efficacement dans une équipe.
            </p>
          </section>
        </header>

        <div className="cv-layout">
          <aside className="cv-sidebar">
            <section className="cv-education">
              <h2 className="cv-section-title">Formation</h2>

              <article>
                <h3 className="cv-sub-title">
                  2025 – 2026 (en cours) • Wild Code School – Développeur Web
                </h3>
                <p>Programmation front-end/back-end, React, Node.js, UI/UX, Scrum.</p>
              </article>

              <article>
                <h3 className="cv-sub-title">À partir de mars 2026 (prévue) • CDA – Alternance</h3>
                <p>Concepteur Développeur d’Applications en alternance • 18 mois.</p>
              </article>

              <article>
                <h3 className="cv-sub-title">2020 – 2023 • EDAA – Formation en graphisme</h3>
                <p>Design visuel, mise en page, retouche, composition.</p>
              </article>

              <article>
                <h3 className="cv-sub-title">1990 – 1994 • Beaux-Arts – Krasnodar</h3>
              </article>

              <article>
                <h3 className="cv-sub-title">2000 • Formation Adobe Suite – Moscou</h3>
              </article>
            </section>

            <section className="cv-interests">
              <h2 className="cv-section-title">Centres d’intérêt</h2>
              <ul className="cv-list">
                <li>Art, design graphique, illustration</li>
                <li>UI/UX et créativité numérique</li>
                <li>Photographie</li>
                <li>IA générative</li>
                <li>Veille technologique</li>
                <li>Psychologie</li>
              </ul>
            </section>

            <section className="cv-languages">
              <h2 className="cv-section-title">Langues</h2>
              <ul className="cv-list">
                <li>Français</li>
                <li>Russe</li>
                <li>Anglais (intermédiaire)</li>
              </ul>
            </section>
          </aside>

          <section className="cv-content">
            <section className="cv-skills">
              <h2 className="cv-section-title">Compétences techniques</h2>
              <ul className="cv-skills-list">
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>React, Node.js, NPM</li>
                <li>Git, GitHub</li>
                <li>API REST, JSON</li>
                <li>UI/UX, Figma</li>
                <li>Adobe Photoshop, Adobe Illustrator</li>
                <li>Terminal, VS Code</li>
                <li>Méthodes agiles / Scrum</li>
                <li>Maîtrise de l’IA générative</li>
              </ul>
            </section>

            <section className="cv-projects">
              <h2 className="cv-section-title">Projets réalisés</h2>
              <p>
                Développement de projets individuels (solo rush) et collaboratifs, allant
                de pages HTML/CSS simples à des applications web complètes en React.
                Intégration d’APIs externes, développement d’interfaces dynamiques, gestion
                d’état, organisation du code, mise en place d’algorithmes simples, maquettes
                Figma et collaboration en équipe selon les méthodes agiles.
              </p>
            </section>

            <section className="cv-experience">
              <h2 className="cv-section-title">Parcours professionnel</h2>

              <article>
                <h3 className="cv-sub-title">2006 – 2019 • Freelance artistique</h3>
                <p>Peinture, design visuel, illustration</p>

                <h3 className="cv-sub-title">2019 – 2025 • Expérience polyvalente hors domaine IT</h3>
                <p>Grande distribution et restauration rapide.</p>
              </article>
            </section>

            <section className="cv-softskills">
              <h2 className="cv-section-title">Compétences professionnelles consolidées</h2>

              <ul className="cv-list">
                <li>
                  <strong>Créativité</strong> — compréhension visuelle, conception d’interfaces, collaboration UI/UX.
                </li>
                <li>
                  <strong>Persévérance</strong> — forte capacité d’adaptation et de résolution de problèmes.
                </li>
                <li>
                  <strong>Adaptabilité</strong> — aisance dans les changements d’outils et d’organisation.
                </li>
                <li>
                  <strong>Gestion du stress</strong> — performance stable en situation de rush.
                </li>
                <li>
                  <strong>Travail en équipe</strong> — coordination fluide avec des équipes nombreuses.
                </li>
                <li>
                  <strong>Autonomie</strong> — organisation personnelle et prise d’initiatives.
                </li>
                <li>
                  <strong>Polyvalence</strong> — gestion simultanée de missions variées.
                </li>
              </ul>

              <h3 className="cv-sub-title">Autres soft skills</h3>
              <p>
                Réactivité, rigueur opérationnelle, résistance à la pression, discipline, ponctualité, endurance,
                sens du service, sens commercial, écoute, analyse des besoins, flexibilité, orientation résultats,
                apprentissage permanent.
              </p>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}


