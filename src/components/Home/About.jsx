import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Deepanshu Sahu </span>
                 and I'm from <span className="yellow"> Amla, Madhya Pradesh, India</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in <b className="yellow">Information Technology</b> from Shri Ramdeobaba College of Engineering and Management, Nagpur in <b className="yellow">2022</b>.
                <br />
                <br />
                I have a strong background in <b className="yellow">Full-stack development</b> and possess a wide range of technical skills.
                I have hands-on experience working on various projects and these projects demonstrate my expertise in technologies such as <b className="yellow">JavaScript</b>,
                <b className="yellow">Node.js</b>, <b className="yellow">React</b>, <b className="yellow">Angular</b>, <b className="yellow">Django</b> and <b className="yellow">Docker</b>.

                <br />
                <br />
                I have a track record of achievements in coding competitions. I have secured top ranks
                among thousands of contestants and earned a <b className="yellow">3-star rating on Codechef</b>.
                With over <b className="yellow">110+ live coding contests </b>110 live coding contests under my belt and <b className="yellow">800+ coding questions solved</b>, I possess strong
                <b className="yellow"> problem-solving</b> and <b className="yellow">coding skills</b>.

                <br />
                <br />
                My skill set is diverse and covers a wide range of programming languages and frameworks.
                From <b className="yellow">C</b>, <b className="yellow">C++</b>, <b className="yellow">TypeScript</b>,
                and <b className="yellow">Python</b> to <b className="yellow">React</b>, <b className="yellow">Angular</b>,
                <b className="yellow">Node.js</b>, and <b className="yellow">MongoDB</b>, I am proficient
                in various technologies. Additionally, I have knowledge of essential tools like <b className="yellow">Git</b>, <b className="yellow">AWS</b>,
                <b className="yellow">Docker</b>, <b className="yellow">Nginx</b>, and <b className="yellow">Linux</b>.
                
                <br/>
                <br/>
                I am also well-versed in core subjects like <b className="yellow">Data Structures  and
                Algorithms</b>, Object-Oriented Programming, Database Management System, and Computer Networks.

                <br />
                <br />
                By combining my project experience, achievements, and diverse skill set, I bring a comprehensive
                approach to full-stack development. I am confident in my ability to contribute effectively
                to any team and deliver high-quality solutions.
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/19sajib"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About