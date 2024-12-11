import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import healthfirst from "../../Assets/Projects/healthfirst.png";
import rideon from "../../Assets/Projects/rideon.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import movie from "../../Assets/Projects/movie.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthfirst}
              isBlog={false}
              title={<span className="purple">HEALTH FIRST</span>}
              description="HealthFirst offers an interactive and seamless experience across devices, making it easy for users to track their progress and stay motivated on their wellness journey. The mission is simple: to inspire healthier habits and provide actionable insights that lead to lasting change. With HealthFirst, healthier living becomes not just a goal, but a sustainable lifestyle."
              ghLink="https://github.com/RathishPavithran/Webpage-1.git"
              viewLink="https://healthfirst-webpage.netlify.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title={
                <>
                  <span className="purple">E-COMMERCE</span><br /> (Under construction 🛠️⏳‼️)
                </>
              }
              description="I developed an interactive e-commerce platform that enhances product discoverability by implementing dynamic product filtering and a responsive search bar. Users can easily filter products by category using a dropdown menu, offering  seamless and personalized shopping experience."
              ghLink="https://github.com/RathishPavithran/E-Commerce.git"
              viewLink="https://ecommerce-webportal.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title={<span className="purple">MOVIE TICKET</span>}
              description="This Movie Ticket Booking app is built with React, Ant Design, React Router DOM, and Axios. It fetches movie data from an API and displays it using Ant Design cards. Users can view movie details, add tickets to the cart, and manage them easily. A login page with protected routes ensures secure access to specific features, providing a smooth and responsive user experience. "
              ghLink="https://github.com/RathishPavithran/Movie-Ticket.git"
              viewLink="https://movie-ticket-view.netlify.app"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rideon}
              isBlog={false}
              title={
                <>
                  <span className="purple">RIDE ON</span><br /> (Under construction 🛠️⏳‼️)
                </>
              }
          
              description="The RideOn project highlights the importance of reliability and professionalism in transportation. With a focus on providing only the best, professionally trained drivers, RideOn ensures passengers get to their destinations safely and on time. The platform promises a seamless ride experience with a user-friendly interface and timely drivers."
              ghLin="#"
              demoLink="#"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
