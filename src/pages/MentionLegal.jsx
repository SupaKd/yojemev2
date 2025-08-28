// src/components/MentionLegal.jsx
import React from "react";

const MentionLegal = () => {
  return (
    <section className="mention-legal">
      <div className="mention-container">
        <h1 className="mention-title">Mentions Légales</h1>

        <article className="mention-block">
          <h2>Éditeur du site</h2>
          <p>
            Ce site est édité par l'association <strong>Jeunesse en Mouvement</strong>, 
            déclarée sous le numéro W123456789, dont le siège social est situé :
            <br />
            10 rue des Jeunes, 75000 Paris.
          </p>
        </article>

        <article className="mention-block">
          <h2>Responsable de la publication</h2>
          <p>
            Le responsable de la publication est <strong>Kevin Dupont</strong>, président de l’association.
            <br />
            Contact : contact@jeunesseenmouvement.org
          </p>
        </article>

        <article className="mention-block">
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par la société <strong>OVH</strong>, 2 rue Kellermann, 59100 Roubaix, France.
            <br />
            Site web : <a href="https://www.ovh.com" target="_blank" rel="noreferrer">www.ovh.com</a>
          </p>
        </article>

        <article className="mention-block">
          <h2>Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur ce site (textes, images, logos...) sont la propriété de l’association,
            sauf mention contraire, et ne peuvent être reproduits sans autorisation.
          </p>
        </article>

        <article className="mention-block">
          <h2>Protection des données</h2>
          <p>
            Aucune donnée personnelle n’est collectée sans votre consentement.
            Pour toute demande de suppression ou d’accès à vos données : contact@jeunesseenmouvement.org
          </p>
        </article>
      </div>
    </section>
  );
};

export default MentionLegal;
