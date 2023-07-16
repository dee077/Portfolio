import React from 'react'
import { Col, Row } from "react-bootstrap";
import {
  SiCodechef,
  SiCodeforces,
  SiLeetcode,
  SiHackerearth,
  SiCodingninjas,
} from "react-icons/si";

const CodingProfiles = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col xs={4} md={2} className="tech-icons profile"  onClick={() => {window.location.href = 'https://www.codechef.com/users/dee777'}}>
            <SiCodechef />
            <p style={{fontSize: "20px"}}>Codechef</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons profile" onClick={() => {window.location.href = 'https://codeforces.com/profile/dee_777'}}>
            <SiCodeforces />
            <p style={{fontSize: "20px"}}>Codeforces</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons profile" onClick={() => {window.location.href = 'https://leetcode.com/dee777/'}}>
            <SiLeetcode />
            <p style={{fontSize: "20px"}}>LeetCode</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons profile" onClick={() => {window.location.href = 'https://www.hackerearth.com/@deepanshu.sahu27'}}>
            <SiHackerearth />
            <p style={{fontSize: "20px"}}>Hackerearth</p>
          </Col>
          <Col xs={4} md={2} className="tech-icons profile" onClick={() => {window.location.href = 'https://www.codingninjas.com/studio/profile/cad2c119-ded5-406e-9aab-f778795f905d'}}>
            <SiCodingninjas />
            <p style={{fontSize: "20px"}}>Coding Ninja</p>
          </Col>
        </Row>
      );
}

export default CodingProfiles
