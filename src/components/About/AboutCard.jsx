import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <h2 style={{ color: "#a588c0", textAlign: "center", fontWeight: "bold" }}>
  Hello! I’m Rathish
</h2>

<p style={{ textAlign: "justify", marginTop: "20px" }}>
I hail from the mesmerizing Pearl City, <span className="purple" style={{ fontWeight: "bold" }}>TUTICORIN, India</span>.
  <br />
  A proud graduate of <span className="purple" style={{ fontWeight: "bold" }}>ANNA UNIVERSITY</span> with a B.TECH in <span className="purple" style={{ fontWeight: "bold" }}>INFORMATION TECHNOLOGY</span>, <span className="purple" style={{ fontWeight: "bold"}}>(2020 - 2024.)</span>
  <br />
  <br />
  I am constantly learning and adapting, keeping myself updated with the latest trends in web development to create <span className="purple" style={{ fontWeight: "bold" }}>high-performing</span>, <span className="purple" style={{ fontWeight: "bold" }}>scalable</span>, and <span className="purple" style={{ fontWeight: "bold" }}>visually stunning websites</span>.
  <br />
  <br />
  
  I bring ideas to life on the web by blending my <span className="purple" style={{ fontWeight: "bold" }}>technical expertise</span> with <span className="purple" style={{ fontWeight: "bold" }}>creativity</span>, ensuring both <span className="purple" style={{ fontWeight: "bold" }}>functionality</span> and <span className="purple" style={{ fontWeight: "bold" }}>aesthetic appeal</span>.
  With a strong command of <span className="purple" style={{ fontWeight: "bold" }}>HTML, CSS, Bootstrap, JavaScript,</span> and <span className="purple" style={{ fontWeight: "bold" }}>React.js</span>.
  <br />
  
  Let’s collaborate and build something impactful together! 🚀
</p>


          <h4 style={{ marginTop: "30px", color: "#a588c0", textAlign: "left" }}>Beyond coding, my interests include:</h4>

<ul style={{ marginTop: "20px", paddingLeft: "20px", fontSize: "1.2rem" }}>
  <li className="about-activity" style={{ marginBottom: "10px" }}>
    <ImPointRight />  Designing visually striking content and layouts on Canva.🎨
  </li>
  <li className="about-activity" style={{ marginBottom: "10px" }}>
    <ImPointRight />  Mellow my mind with music to stay calm and stress-free.🎶 
  </li>
  <li className="about-activity" style={{ marginBottom: "10px" }}>
    <ImPointRight />  Exploring new destinations and embracing the joy of travel.🌍
  </li>
</ul>

<p style={{ color: "rgb(155 126 172)", marginTop: "30px", fontStyle: "italic", textAlign: "center", fontSize: "1.1rem" }}>
  "Passionate about creating websites that leave a lasting impact! 💻"
</p>


          <footer className="blockquote-footer" style={{ textAlign: "center" }}>RP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
