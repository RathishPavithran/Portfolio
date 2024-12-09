import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rathish Pavithran </span>
            from <span className="purple"> Tuticorin, India.</span>
            <br />
            I have completed B.Tech in Information Technology at Anna
            University.
            <br />
            I’m a fresher, a passionate web developer with a strong foundation in HTML, CSS, JavaScript, and React.js.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Passionate about creating websites that leave a lasting impact.!"{" "}
          </p>
          <footer className="blockquote-footer">RP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
