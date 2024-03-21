import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <Container fluid className=" " id=" ">
        <p>
          <a
            className="btn btn-primary btn js-scroll px-4"
            href="#work"
            role="button"
          >
            View My Work
          </a>
        </p>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="whiteColor">FIND ME ON</h1>
            <p>
              <span className="whiteColor">Feel free to </span>{" "}
              <span className="purple">connect </span>{" "}
              <span className="whiteColor">with me</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Gashaw512"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/gashaw_kidane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gashaw-kidane/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gashaw_kidane"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    </Container>
  );
};
export default HomeAbout;
