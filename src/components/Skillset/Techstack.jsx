import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,DiDatabase
} from "react-icons/di";
import {
  SiPhp,
  SiMysql,
  SiRedux,
  SiMongodb,
  SiHtml5,SiBlazor,
  SiExpress,SiMicrosoftsqlserver,
  SiPostgresql, SiTailwindcss, SiDotnet
} from "react-icons/si";
import { FaLaravel, FaBootstrap ,FaCode, FaPython, FaCss3Alt} from "react-icons/fa";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span>C#</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlazor /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver /> 
      </Col>
    </Row>
  );
}

export default Techstack;
