import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle'
import pdf from "../assets/MohamedAZ.pdf"

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AiFillStar, AiOutlineRocket } from 'react-icons/ai';
import { FaReact, FaGraduationCap } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
          <h1 className="my-4">My <span className="main-name">Timeline</span></h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="2024 - present"
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={<AiFillStar />}
            >
              <h3 className="vertical-timeline-element-title">Freelancer Full Stack Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Morocoo</h4>
              <p>
              ReactJS | Laravel | Express Node JS | MySQL | MongoDB | Bootstrap | RESTApi | Git | GitHub | Docker
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="2022 - 2024"
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">Specialized Institute of Applied Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">digital development full-stack</h4>
              <p>
                I have Graduated as a Full Stack Web Developer
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date="2018-2021"
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={<FaReact/>}
            >
              <h3 className="vertical-timeline-element-title">Graduated HightSchool</h3>
              <h4 className="vertical-timeline-element-subtitle">Agadir, Morocco</h4>
              <p>
                I found my passion about programming.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume