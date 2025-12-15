import "../styles/Parcours.css";

function Parcours() {
  return (
    <main className="parcours-page">
      <header className="parcours-header">
        <h1 className="parcours-title">Parcours</h1>
        <p className="parcours-intro">
          développeuse front-end en reconversion, à l’interface entre création,
          technologie et expérience utilisateur.
        </p>
      </header>

      <section className="parcours-section">
        <h2>Présentation</h2>
        <p>
          Je m’appelle <strong>Yuliana Krasulya</strong> et je vis en région
          parisienne. Je suis actuellement en reconversion professionnelle vers
          les métiers du <strong>développement web</strong>, au sein de la{" "}
          <strong>Wild Code School</strong>.
        </p>
      </section>

      <section className="parcours-section">
        <h2>Un parcours créatif avant la tech</h2>
        <p>
          Formée aux <strong>Beaux-Arts</strong> en Russie, j’ai développé très
          tôt une forte sensibilité pour la composition, la couleur, la
          structure et le sens du détail.
        </p>
        <p>
          J’ai ensuite travaillé comme <strong>graphiste maquettiste</strong>{" "}
          dans l’édition de livres puis de magazines, ce qui m’a permis
          d’acquérir rigueur, méthode et sens du travail collaboratif.
        </p>
      </section>

      <section className="parcours-section">
        <h2>Exil, adaptation et résilience</h2>
        <p>
          Mon arrivée en France sans maîtrise de la langue m’a conduite à
          exercer des emplois alimentaires, physiquement exigeants, tout en
          m’adaptant à un nouvel environnement culturel et professionnel.
        </p>
        <p>
          Cette période a renforcé ma <strong>résilience</strong>, mon{" "}
          <strong>autonomie</strong> et ma capacité à apprendre rapidement dans
          des contextes nouveaux.
        </p>
      </section>

      <section className="parcours-section">
        <h2>Pourquoi le développement web</h2>
        <p>
          Progressivement, la programmation et les technologies numériques ont
          pris une place centrale dans mes centres d’intérêt. J’y ai trouvé un
          terrain d’expression intellectuelle riche, structuré et évolutif.
        </p>
        <p>
          Le monde de la tech me séduit par sa culture de l’{" "}
          <strong>open-source</strong>, du partage de connaissances et du
          travail en équipe.
        </p>
      </section>

      <section className="parcours-section">
        <h2>Formation actuelle</h2>
        <p>
          À la <strong>Wild Code School</strong>, je développe des compétences en
          HTML, CSS, JavaScript, TypeScript et React, tout en travaillant sur
          des projets concrets en méthodologie agile.
        </p>
        <p>
          Mon profil s’oriente naturellement vers le{" "}
          <strong>front-end</strong>, où je peux combiner logique technique,
          design et expérience utilisateur.
        </p>
      </section>

      <section className="parcours-section">
        <h2>Valeurs et posture professionnelle</h2>
        <ul>
          <li>Curiosité intellectuelle et apprentissage continu</li>
          <li>Rigueur et sens du détail</li>
          <li>Collaboration et esprit d’équipe</li>
          <li>Respect de l’utilisateur final</li>
        </ul>
      </section>

      <section className="parcours-section">
        <h2>Aujourd’hui</h2>
        <p>
          Je construis un profil de <strong>développeuse front-end</strong> à
          l’interface entre design, technique et UX, avec l’objectif
          d’intégrer une équipe bienveillante et stimulante, et de continuer à
          progresser durablement dans la tech.
        </p>
      </section>
    </main>
  );
}

export default Parcours;
