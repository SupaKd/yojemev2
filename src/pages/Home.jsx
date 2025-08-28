import React from "react";

// Composants importés normalement
import Hero from "../pages/Hero";
import Marquee from "../pages/Marquee";
import Presentation from "./Presentation";
import About from "../pages/About";
import Mission from "./Mission";

function Home() {
  return (
    <main className="home">
      <Hero />
      <Marquee />
      <Presentation />
      <Mission />
      <About />

    </main>
  );
}

export default Home;
