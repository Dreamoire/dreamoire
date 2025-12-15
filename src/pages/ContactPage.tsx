import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-page__header">
        <h1 className="contact-page__title">Contact</h1>
        <p className="contact-page__subtitle">
          Vous pouvez m’écrire via ce formulaire, ou me retrouver sur mes réseaux.
        </p>
      </header>

      <section className="contact-page__grid" aria-label="Formulaire de contact">
        <form
          className="contact-form"
          action="https://formspree.io/f/mrbndogo"
          method="POST"
        >
          <label className="contact-form__field">
            <span className="contact-form__label">Nom</span>
            <input
              className="contact-form__input"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Email</span>
            <input
              className="contact-form__input"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>

          <label className="contact-form__field">
            <span className="contact-form__label">Message</span>
            <textarea
              className="contact-form__textarea"
              name="message"
              rows={6}
              required
            />
          </label>

          {/* Optionnel: sujet lisible dans l’email */}
          <input type="hidden" name="_subject" value="Contact – dreamore.fr" />

          <button className="contact-form__button" type="submit">
            Envoyer
          </button>
        </form>

        <aside className="contact-links" aria-label="Réseaux">
          <h2 className="contact-links__title">Réseaux</h2>

          <ul className="contact-links__list">
            <li>
              <a
                className="contact-links__link"
                href="https://www.linkedin.com/in/yuliana-krasulya"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="contact-links__link"
                href="https://github.com/Dreamoire"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

export default ContactPage;
