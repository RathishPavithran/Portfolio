import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  // SiPostman,
  SiNetlify,
  SiVercel,
  // SiMacos,
  SiCanva,
  SiNpm,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Add npm icon */}
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Add npm icon */}
        <SiNpm />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
    </Row>
  );
}

export default Toolstack;
