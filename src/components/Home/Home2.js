import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              and I specialize in crafting &nbsp;
              <i>
                <b className="purple">
                  full-stack applications using the MERN stack{" "}
                </b>{" "}
                with{" "}
                <b className="purple">
                  TypeScript, Next.js, MongoDB Atlas, and Mongoose .
                </b>
                in my toolkit.
              </i>
              <br />
              <br />
              I’ve worked with tools like{" "}
              <b className="purple">
                Docker, Kubernetes (Minikube, kubectl, Helm), CI/CD pipelines,
              </b>{" "}
              and even code quality tools like
              <i>
                <b className="purple"> ESLint and SonarQube.</b>
              </i>
              <br />
              <br />
              Currently, I’m
              <i>
                <b className="purple"> leading </b>
              </i>
              the development of Planit – a task tracking and productivity tool
              for AIESEC in Faisalabad, where I serve as the
              <i>
                <b className="purple"> Executive Board Responsible. </b>
              </i>
              I manage an entire dev team, from strategy to execution, making
              sure we ship tools that actually empower teams.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Faiq-Dogar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/faiq-zeeshan-dogar-120141253/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/faiq_dogar4363/"
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
    </Container>
  );
}
export default Home2;
