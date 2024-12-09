import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
// import {AiFillGithub,AiFillInstagram,} from "react-icons/ai";
import {FaEnvelope, FaLinkedinIn, FaUser, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> FIND</span> OUT WHAT <span className="purple"> DRIVES ME</span>
            </h1>
            <p className="home-about-body">
            The act of coding 💻 is my journey 🚀 toward creating something significant 🌟 and impactful 🌍. 
              <br />
              {/* <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br /> */}
              <br />
              My field of Interest lies in building new &nbsp;
              <i>
                <b className="purple">User-Friendly, and Responise Website</b> and
                that leave a lasting impression.{" "}
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products
              using <b className="purple">Node.js </b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
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
            <h1><span className="purple">FIND</span> ME ON</h1>
            {/* <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rathish-pavithran/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+91%209994907738"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaUser/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/qr/HXR7GD7RZKQED1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rathish1227@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
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
