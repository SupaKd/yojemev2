// Presentation.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";

const images = ["img3.webp","img6.jpg", "img7.webp"];

function Presentation() {
  return (
    <section id="presentation" className="presentation">
      <div className="container">
        {/* Texte de présentation */}
        <motion.div
          className="presentation__content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="presentation__title">Notre Vision</h2>
          <h3 className="presentation__subtitle">
            L’ingénierie humaine au service de l’impact social
          </h3>
          <p className="presentation__description">
            L'association <strong>Yojeme</strong> à pour objet le conseil, la
            conception, l'ingénierie ou l'organisation de projets
            socio-éducatifs, culturels ou sportifs. Sa finalité est l'aide à
            l'épanouissement humain par le développement de plusieurs axes qui
            sont :
          </p>

          <ul className="presentation__list">
            <li>
              Des <strong>projets</strong> répondant à des besoins humains.
            </li>
            <li>
              Un réseau de <strong>partenaires</strong> partageant les valeurs
              de l'association.
            </li>
            <li>
              L'aide aux membres sur leurs projets en proposant son savoir-faire
              ou celui de son réseau.
            </li>
            <li>
              Des formations ou actions de formations à destination de ses
              membres ou de personnes y participant via l'association ou une
              structure membre.
            </li>
            <li>
              Pilotage de démarches de <strong>recherche-action</strong> et
              d’expérimentation.
            </li>
          </ul>
        </motion.div>

        {/* Slider d'illustration */}
        <motion.div
          className="presentation__slider"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={900}
            loop={images.length > 1}
            spaceBetween={20}
            slidesPerView={1}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Illustration ${index + 1}`}
                  className="presentation__image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Presentation;
