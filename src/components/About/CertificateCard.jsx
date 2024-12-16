import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { BsEye } from "react-icons/bs";

function CertificateCard(props) {
  return (
    <Card className="certificate-card-view">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>

    {/* Institute Name */}
    <Card.Subtitle className="mb-2 text-muted">
     <strong> {props.institute}</strong>
    </Card.Subtitle>

    {/* Location */}
    <Card.Text className="text-muted">
       {props.location}
    </Card.Text>
    {/* Timeline */}
    <Card.Text className="text-muted">
       {props.timeline}
    </Card.Text>

    {/* Description */}
    <Card.Text style={{ textAlign: "justify" }}>
      {props.description}
    </Card.Text>

    {/* GitHub Link */}
    <Button variant="primary" href={props.ghLink} target="_blank">
      <BsEye /> &nbsp;
      {props.isBlog ? "Blog" : "View"}
    </Button>
    {"\n"}
    {"\n"}

    {/* Demo Link (optional) */}
    {/* {!props.isBlog && props.demoLink && (
      <Button
        variant="primary"
        href={props.demoLink}
        target="_blank"
        style={{ marginLeft: "10px" }}
      >
        <BsEye /> &nbsp;
        {"View"}
      </Button>
    )} */}
  </Card.Body>
</Card>

  );
}
export default CertificateCard;
