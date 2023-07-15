import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiFirebase,
  SiLinux,
  SiNginx,
} from "react-icons/si";
import { 
  FaAws,
  FaDocker,
} from "react-icons/fa"

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <p style={{fontSize: "20px"}}>Aws</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <p style={{fontSize: "20px"}}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{fontSize: "20px"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{fontSize: "20px"}}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{fontSize: "20px"}}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
        <p style={{fontSize: "20px"}}>Nginx</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{fontSize: "20px"}}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize: "20px"}}>Vs Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{fontSize: "20px"}}>Postman</p>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
