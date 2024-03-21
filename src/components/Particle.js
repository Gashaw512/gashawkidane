import Particles from "react-tsparticles";
import ParticlesConfig from "./ParticleConfig";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import React, { useEffect, useState } from "react";

const Particle = () => {
  const [theme] = useState("light");
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const [particlesContainer, setParticlesContainer] = useState();

  // const particlesLoaded = useCallback((container) => {
  //   setParticlesContainer(container);
  // }, []);

  useEffect(() => {
    if (particlesContainer && particlesContainer.currentTheme !== theme) {
      particlesContainer.loadTheme(theme);
    }
  }, [theme, particlesContainer]);
  return (
    <>
      <Particles
        options={ParticlesConfig}
        id="tsparticles"
        init={particlesInit}
      />
    </>
  );
};

export default Particle;
