import React from "react";
import { useParams } from "react-router-dom";
import { ProjectLists } from "../helpers/ProjectLists";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectLists[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.name} />

      <GitHubIcon />
    </div>
  );
}

export default ProjectDisplay;
