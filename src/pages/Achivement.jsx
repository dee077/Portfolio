import React from "react";
import { Container } from "react-bootstrap";
import { SiCodechef } from "react-icons/si";
import CodingProfiles from "../components/Skillset/CodingProfiles";

const Achivement = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Personal <strong className="yellow"> Achivements </strong>
        </h1>
        <h2
          style={{ textAlign: "left", marginTop: "30px", marginBottom: "20px" }}
        >
          Contests :
        </h2>
        <ul style={{ textAlign: "left", marginLeft: "40px" }}>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            Secured <b className="yellow highlight">185 rank</b> among <b className="yellow highlight">3k+ contestant</b> in Codechef Starter 49 division 3 challenge.
            <a className="achivement-icon" href="https://www.codechef.com/rankings/START49C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank"><SiCodechef style={{marginLeft: "10px"}}/></a>
          </li>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            Secured <b className="yellow highlight">237 rank</b> among <b className="yellow highlight">4k+ contestant</b> in Codechef Starter 82 division 3 challenge.
            <a className="achivement-icon" href="https://www.codechef.com/rankings/START82C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank"><SiCodechef style={{marginLeft: "10px"}}/></a>
          </li>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            Secured <b className="yellow highlight"> 237 rank </b> among <b className="yellow highlight">2k+ contestant</b> in Codechef Starter 36 division 3 challenge.
            <a className="achivement-icon" href="https://www.codechef.com/rankings/START36C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank"><SiCodechef style={{marginLeft: "10px"}}/></a>
          </li>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            Secured <b className="yellow highlight"> 256 rank </b> among <b className="yellow highlight"> 2k+ contestant </b> in Codechef Starter 38 division 3 challenge.
            <a className="achivement-icon" href="https://www.codechef.com/rankings/START38C?itemsPerPage=100&order=asc&page=1&search=dee777&sortBy=rank"><SiCodechef style={{marginLeft: "10px"}}/></a>
          </li>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            <b className="yellow highlight">3 Star</b> at Codechef Username:<b className="yellow highlight">dee777</b> Best rating: <b className="yellow highlight">1781</b>.
            <a className="achivement-icon" href="https://www.codechef.com/users/dee777"><SiCodechef style={{marginLeft: "10px"}}/></a>
          </li>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            <b className="yellow highlight">110+</b> live coding contest given across all coding platforms.
            <a className="achivement-icon" href="https://www.codechef.com/users/dee777"><SiCodechef style={{marginLeft: "10px"}}/></a>
          </li>
        </ul>

        <h2
          style={{ textAlign: "left", marginTop: "30px", marginBottom: "20px" }}
        >
          Problems Solved :
        </h2>
        <ul style={{ textAlign: "left", marginLeft: "40px" }}>
          <li className="bullets">
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              &#8226;
            </span>
            Around 800+ Coding Questions Solved across different coding platfroms.
          </li>
        </ul>
        <h2
          style={{ textAlign: "left", marginTop: "30px", marginBottom: "20px" }}
        >
          Coding Profiles :
        </h2>
        <CodingProfiles />
      </Container>
    </Container>
  );
};

export default Achivement;
