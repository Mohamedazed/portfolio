import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import image from "../assets/projects/image.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Inventory management system"
              description="This inventory management system features a responsive front-end design, complete with an employee and admin panel built using React and Material-UI. The system enables full CURD functionality for employers, employee types, purchases, product categories, product inventory and suppliers. Additionally, users can confirm or cancel a sale from the Cart section. The backend is run by a Node Express server and uses MySQL to manage the database."
              ghLink="https://github.com/Mohamedazed/Gestion-de-stock/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="School management system"
              description="This platform features a responsive interface designed using Reactjs and Bootstrap/CSS, and uses a REST API built with Nodejs and Expressjs, allowing administrators to easily manage students, teachers, staff types, and classes, along with a teacher panel that allows them to view personal information along with their class information there. In addition, users can easily reset their password. The backend is run by a Node Express server and uses MySQL to manage the database."
              ghLink="https://github.com/Mohamedazed/Employes-Management-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Store Website"
              description="This ecommerce website features a responsive front-end using Reactjs and designed with Bootstrap5 and CSS3. This store application allow displaying data of products using APIs, with interface of categories and products cards...  "
              ghLink="https://github.com/Mohamedazed/StoreAppReact"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects