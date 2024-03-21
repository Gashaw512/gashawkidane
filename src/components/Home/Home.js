import React from "react";
import Particle from "../Particle";
import {Container} from "react-bootstrap";
import HomeHead from "./HomeHead";
import HomeAbout from "./HomeAbout";

const home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />  
        <HomeHead />
        <HomeAbout/>
      </Container>
    </section>
  );
};
export default home;
