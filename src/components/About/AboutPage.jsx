import { Container } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import AboutHeader from "./AboutHeader";

const About = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="about-content">
        <AboutHeader />
      </Container>
       <AboutCard />
    </Container>
  );
};
export default About;