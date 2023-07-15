import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import myChat from "../assets/projects/MyChat.png"
import onlineJudge from "../assets/projects/OnlineJudge.png"
import cryptoChecker from "../assets/projects/CryptoChecker.png"

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
              imgPath={myChat}
              isBlog={false}
              title="My Chat"
              description="My chat is a feature-rich web application developed using the MERN stack
              that offers both one-on-one and group chat capabilities. It empowers users to create and manage
              group chats effortlessly, with the ability to add or remove members seamlessly. The frontend of
              the application is built using React and styled with Chakra UI, providing an attractive and
              responsive user interface. Data from API endpoints is fetched and displayed in a visually
              appealing manner. User authentication is implemented securely using JWT token-based
              authentication, ensuring that only authorized users can access the chat functionality.
              User passwords are encrypted and stored securely in the MongoDB database utilizing Bcrypt.
              To enable real-time chat updates, Socket.io is employed, guaranteeing instant message 
              notifications and a smooth chat experience for participants."
              ghLink="https://github.com/dee077/My-Chat"
              liveLink="https://my-chat-gqf1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlineJudge}
              isBlog={false}
              title="Online Judge"
              description="A coding challenge website using Django, providing users with access to problem
               statements and code submission features. The web application incorporates CRUD operations,
               allowing users to create, read, update, and delete their code submissions. To enhance the
               user experience, I developed a user-friendly interface using HTML, CSS, JavaScript, and
               Bootstrap. For secure code execution, the website runs code submissions inside a Docker container,
               ensuring a controlled and isolated environment. To make the website accessible on the internet,
               I deployed it using Gunicorn and Nginx on an AWS EC2 instance. This deployment setup ensures
               stability and performance while allowing users to access the platform for coding challenges
               and evaluation."
              ghLink="https://github.com/dee077/Online_Judge"
              liveLink="http://3.111.218.152:8000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoChecker}
              isBlog={false}
              title="Crypto Checker"
              description="An Angular web application designed to track cryptocurrency prices, providing users
               with the tools to maximize their profit potential. The app features a dynamic carousel that
               showcases real-time price fluctuations of the top 10 cryptocurrencies. Additionally, I
               implemented a robust Material UI table with advanced functionalities such as search, sort,
               and pagination for convenient data exploration. The app incorporates two-way data binding to
               facilitate easy currency switching between USD and INR, updating relevant data accordingly.
               Detailed price change graphs, utilizing Chart.js, are available for each coin, allowing users
               to select desired timeframes for analysis. Overall, this Angular web app offers comprehensive
               cryptocurrency price tracking with user-friendly features and interactive visualizations."
              ghLink="https://github.com/dee077/Crypto-Checker"
              liveLink="https://crypto-checker777.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
