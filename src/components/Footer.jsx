import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
   
        <div className="footer__top">

          <div>
            <img src="/logodesk.png" alt="logo" />
          </div>
          <div className="informations">
            <h2>Informations officielles</h2>
            <p><strong>N° SIRET :</strong> 945 270 817 00014</p>
            <p><strong>Code APE :</strong> V94.99Z</p>
          </div>

          <nav className="nav">
            <Link to="/about">À propos</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mention">Mentions légales</Link>
          </nav>

          <div className="socials">
            <a
              href="https://www.facebook.com/people/Yoj%C3%A9m%C3%A9-France/pfbid028FWjby1bH3wjPyr24zyx8QopG65WXJfbV46ey2sqN7tAwQDN5rrZPtuEHf7eH8cWl/?sk=about"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a href="mailto:contact@monassociation.org">
              <i className="fas fa-envelope" />
            </a>
            <a href="tel:0783939736">
              <i className="fas fa-phone" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} YOJEME. Tous droits réservés.</p>
        </div>
    </footer>
  );
}

export default Footer;
