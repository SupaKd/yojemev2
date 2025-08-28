// src/layout/Header.jsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((p) => !p);
  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <button
        className={`burger ${isOpen ? "rotate" : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        type="button"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBarsStaggered} />
      </button>

      <Link to="/" onClick={closeMenu} className="logo_mobile">
        <img src="logomobile.png" alt="logo" />
      </Link>
      <Link to="/" onClick={closeMenu} className="logo_desktop">
        <img src="logodesk.png" alt="logo" />
      </Link>

      {/* Overlay arrière-plan seulement */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      {/* Drawer gauche */}
      <nav
        id="primary-nav"
        className={`header__nav ${isOpen ? "show" : ""}`}
        aria-label="Navigation principale"
      >
          <img  className="logonav" src="logodesk.png" alt="logo" />

        <NavLink to="/" onClick={closeMenu}>
          Accueil
        </NavLink>
        <a href="#about" onClick={closeMenu}>
          Notre équipe
        </a>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
