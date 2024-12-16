import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import brassy from "../../Assets/brassy.png";
import ascentia from "../../Assets/ascentia.png";
function Certificate() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Certified</strong> Expertise
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <strong className="purple">Certifications</strong> I've
          achieved recently, showcasing my{" "}
          <strong className="purple">Technical Skills</strong> and{" "}
          <strong className="purple">Professional Growth</strong>.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={brassy}
              isBlog={false}
              title="Front-End Developement"
              institute="Brassy Academy"
              location="Tirunelveli"
              timeline="September 2024 - November 2024"
              description="I completed a comprehensive front-end development course where I gained in-depth knowledge of HTML, CSS, and JavaScript. The program emphasized responsive web design, teaching me how to create mobile-friendly, cross-browser compatible websites. I worked extensively with modern tools and frameworks like Bootstrap and Tailwind CSS, building interactive user interfaces that prioritize user experience."
              ghLink="https://drive.google.com/file/d/18aZ2dFiFGY8RXL1QZqAMboUgMHXdVWZQ/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="certificate-card">
            <CertificateCard
              imgPath={ascentia}
              isBlog={false}
              title="Back-End Development"
              institute="Ascentia Academy"
              location="Thoothukudi"
              timeline="December 2024 - Ongoing"
              description="I am undergoing intensive training in a back-end development course, where I focus on the MERN stack (MongoDB, Express, React, Node.js). This course provides me with hands-on experience in building scalable, full-stack applications. I gain expertise in creating server-side logic, managing databases with MongoDB, and developing RESTful APIs using Express."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificate;
