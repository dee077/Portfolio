import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
} from "react-icons/di";
import {
  SiCplusplus,
  SiPython,
  SiTypescript,
  SiMysql
} from "react-icons/si";
import { } from 'react-bootstrap-icons';

const Languages = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p style={{fontSize: "20px"}}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: "20px"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <p style={{fontSize: "20px"}}>Pyhton</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{fontSize: "20px"}}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{fontSize: "20px"}}>MySql</p>
      </Col>
    </Row>
  )
}

export default Languages
