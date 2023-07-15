import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" style={{marginRight: "20px"}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <BsGithub style={{marginRight: "5px"}} /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </div>
        </Button>

        <Button variant="primary" href={props.liveLink} target="_blank">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <FiExternalLink style={{marginRight: "8px"}}/>
            {props.isBlog ? "Blog" : "Live"}
          </div>
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
