import { useId, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo-yk.svg";
import "../styles/NavBar.css";

const KEY_INFO =
  "Informations clés: Développeur front-end / full stack (alternance) — Paris — FR / EN / RU";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-top">
          <NavLink to="/" className="nav-logo-area" onClick={closeMenu}>
            <img src={logo} alt="Logo YK" className="nav-logo-image" />
            <span className="nav-logo-text">Yuliana Krasulya</span>
          </NavLink>

          <nav className="nav-links" aria-label="Navigation principale">
            <NavLink
              to="/parcours"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
            >
              Parcours
            </NavLink>
            <NavLink
              to="/projets"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
            >
              Articles
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link${isActive ? " nav-link--active" : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="nav-actions">
            <NavLink to="/cv" className="nav-cv-button" onClick={closeMenu}>
              Voir CV
            </NavLink>
         
            <button
              type="button"
              className="nav-burger"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="nav-burger-lines" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="nav-bottom" aria-label={KEY_INFO}>
          <div className="nav-ticker">
            <div className="nav-ticker-track">
              <span className="nav-ticker-text">{KEY_INFO}</span>
              <span className="nav-ticker-sep" aria-hidden="true">
                •
              </span>
              <span className="nav-ticker-text" aria-hidden="true">
                {KEY_INFO}
              </span>
            </div>
          </div>
        </div>

        <div
          id={menuId}
          className={`nav-mobile${isMenuOpen ? " nav-mobile--open" : ""}`}
          role="dialog"
          aria-label="Menu mobile"
        >
          <nav className="nav-mobile-links" aria-label="Navigation mobile">
            <NavLink
              to="/parcours"
              className={({ isActive }) =>
                `nav-mobile-link${isActive ? " nav-mobile-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              Parcours
            </NavLink>
            <NavLink
              to="/projets"
              className={({ isActive }) =>
                `nav-mobile-link${isActive ? " nav-mobile-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              Projets
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `nav-mobile-link${isActive ? " nav-mobile-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              Articles
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-mobile-link${isActive ? " nav-mobile-link--active" : ""}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
