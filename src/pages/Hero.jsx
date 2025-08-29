import React from "react";

function Hero() {
  return (
    <section className="hero">
      {/* Image de fond zoomable via CSS */}
      <div className="hero__background" />

      {/* Contenu texte */}
      <div className="hero__content">
        <h1>YOJEME : Des projets à forger.</h1>
        <p>
          Conseil - Conception - Ingénierie - Projets
          socio-éducatifs, culturels ou sportifs.
        </p>
        <a href="#presentation">
          <button>Découvrir l'association</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
