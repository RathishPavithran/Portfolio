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
    <span className="purple">FIND</span> OUT WHAT <span className="purple">DRIVES ME</span>
  </h1>
  <p className="home-about-body">
    The act of coding 💻 is my journey 🚀 toward creating something <b className="purple">meaningful 🌟</b> and <b className="purple">impactful 🌍</b>.
    
    I am passionate about crafting <b className="purple">user-friendly, responsive websites</b> that leave a lasting impression.
   <br/>
   <br />
    With every project, I strive to combine <b className="purple">creativity</b> and <b className="purple">functionality</b>, using modern technologies like 
    <b className="purple"> Node.js</b>, <b className="purple">Express.js</b>, <b className="purple">React.js</b>, and 
    <b className="purple"> MongoDB</b> to build dynamic, scalable, and data-driven web applications 🔥.
    <br />
    <br />
    Exploring new tools and frameworks, I’m always excited to innovate and push the boundaries of <b className="purple">full-stack development</b> to deliver <b className="purple">seamless, high-performance digital experiences 💡</b>.
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
