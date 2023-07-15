import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCss3 } from 'react-icons/fa';
import {
  DiReact,
  DiNodejs,
  DiDjango,
  DiAngularSimple,
  DiBootstrap
} from "react-icons/di";
import {
  SiMongodb,
  SiHtml5,
  SiTailwindcss,
  SiExpress
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: "20px"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <p style={{fontSize: "20px"}}>Angular</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: "20px"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{fontSize: "20px"}}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p style={{fontSize: "20px"}}>Django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p style={{fontSize: "20px"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p style={{fontSize: "20px"}}>Html</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
        <p style={{fontSize: "20px"}}>Css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{fontSize: "20px"}}>Tailwind Css</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <p style={{fontSize: "20px"}}>Bootstrap</p>
      </Col>
     
    </Row>
  );
}

export default Techstack;
