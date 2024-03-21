import { Col, Row } from "react-bootstrap";
import profile from "../../Assets/skills_test.svg";
import Tilt from "react-parallax-tilt";

const AboutHeader = () => {
  return (
    <Row className="about-header">
      <Col md={5} style={{ paddingBottom: 20 }}>
        <Tilt>
          <img src={profile} className="img-fluid about-img" alt="avatar" />
        </Tilt>
        {/* </Tilt> */}
      </Col>
      <Col md={7}>
        <h1 style={{ paddingBottom: 15 }} className="about-heading">
          Who Am I{" "}
          <span className="wave questio" role="img" aria-labelledby="wave">
            ?
          </span>
         
        </h1>
       

        <p className="about-description">
          Hello! I'M
          <strong className="main-name"> Gashaw Kidanu,</strong> a
          result-oriented and self-motivated Software Engineer with an emphasis
          in full stack development and Cyber security. Expert in React JS, Vue
          JS, Node JS, Laravel, and SQL.
        </p>
        <div className="line-mf"></div>
      </Col>
    </Row>
  );
};
export default AboutHeader;
