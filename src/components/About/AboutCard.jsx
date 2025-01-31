import { Card, Col, Container, Row } from "react-bootstrap";
// import skill from "../../Assets/skills.jfif";
// import skill from "../../Assets/skilll.png";
import ListGroup from "react-bootstrap/ListGroup";
import Tilt from "react-parallax-tilt";
import {
  FaBootstrap,
  FaGithubSquare,
  FaJava,
  FaLaravel,
  FaNode,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

import { DiJavascript1, DiPython } from "react-icons/di";
import {
  SiSpringboot,
  SiJira,
  SiIntellijidea,
  SiVisualstudio,
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const AboutCard = () => {
  return (
    <Row className="card-container">
      <Card className="card">
        <Card.Header>
          <Row fluid ="true" className="justify-content-center">
            <div>
              {" "}
              <span className="skill-heading">T</span>{" "}
              <span className="other">echnical Skills</span>
            </div>
          </Row>
        </Card.Header>
        <Card.Body variant="primary">
          <Container className="justify-content-center"></Container>
          <Container className="justify-content-center">
            <Row className="justify-content-center">
              <Col md={3} className="skillContainer">
                <Tilt>
                  <Card.Header className="skill-header">
                    Programming Language
                  </Card.Header>
                  <ListGroup variant="flush" className="list-group-item">
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://www.w3schools.com/js/DEFAULT.asp"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <DiJavascript1 />
                        </a>{" "}
                      </span>{" "}
                      JavaScript
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://www.javatpoint.com/java-tutorial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaJava />
                        </a>{" "}
                      </span>{" "}
                      Java
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://www.w3schools.com/python/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <DiPython />
                        </a>
                      </span>
                      Python
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://www.programiz.com/cpp-programming"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CgCPlusPlus />
                        </a>
                      </span>
                      C++
                    </ListGroup.Item>
                  </ListGroup>
                </Tilt>
              </Col>
              <Col md={3} className="skillContainer">
                <Tilt>
                  <Card.Header className="skill-header">
                    Frontend Technology
                  </Card.Header>
                  <ListGroup variant="flush" className="list-group-item">
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        {" "}
                        <a
                          href="https://reactjs.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaReact />
                        </a>{" "}
                      </span>{" "}
                      React JS
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://vuejs.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaVuejs />
                        </a>
                      </span>{" "}
                      Vue JS
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://getbootstrap.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaBootstrap />
                        </a>{" "}
                      </span>
                      Bootstrap/CSS
                    </ListGroup.Item>
                  </ListGroup>
                </Tilt>
              </Col>
              <Col md={3} className="skillContainer">
                <Tilt>
                  {" "}
                  <Card.Header className="skill-header">
                    Backend Technology
                  </Card.Header>
                  <ListGroup variant="flush" className="list-group-item">
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://nodejs.org/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaNode />
                        </a>{" "}
                      </span>{" "}
                      Node JS
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://laravel.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLaravel />
                        </a>{" "}
                      </span>{" "}
                      Laravel
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://spring.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiSpringboot />
                        </a>{" "}
                      </span>{" "}
                      Spring Boot
                    </ListGroup.Item>
                  </ListGroup>
                </Tilt>
              </Col>
              <Col md={3} className="skillContainer">
                <Tilt>
                  <Card.Header className="skill-header">Tools </Card.Header>
                  <ListGroup
                    variant="flush"
                    className="list-group-item justify-content-center"
                  >
                    <ListGroup.Item className="skill-list justify-content-center">
                      <span className="tech-icon">
                        <a
                          href="https://spring.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithubSquare />
                        </a>
                      </span>{" "}
                      Github
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        {" "}
                        <a
                          href="https://spring.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <SiVisualstudio />
                        </a>
                      </span>{" "}
                      Visual Studio
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        {" "}
                        <a
                          href="https://spring.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiIntellijidea />
                        </a>
                      </span>{" "}
                      IntelliJ IDEA
                    </ListGroup.Item>
                    <ListGroup.Item className="skill-list">
                      <span className="tech-icon">
                        <a
                          href="https://spring.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiJira />
                        </a>
                      </span>{" "}
                      Jira
                    </ListGroup.Item>
                  </ListGroup>
                </Tilt>
              </Col>
            </Row>
            {/* <Row className="tools">
              
            </Row> */}
          </Container>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Row>
  );
};
export default AboutCard;
