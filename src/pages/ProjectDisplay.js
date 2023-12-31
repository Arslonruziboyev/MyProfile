import React from "react";
import { useParams } from "react-router-dom";
import { ProjectLists } from "../helpers/ProjectLists";
import GitHubIcon from "@mui/icons-material/GitHub";

import "../styles/projectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectLists[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <a href={project.linkToWebsite}>Access Via Internet</a>
      </p>
      <a href="https://github.com/Arslonruziboyev">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
