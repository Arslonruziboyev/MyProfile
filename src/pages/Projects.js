import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectLists } from "../helpers/ProjectLists";
import "../styles/project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My own projects</h1>
      <div className="projectList">
        {ProjectLists.map((list, idx) => {
          return <ProjectItem id={idx} name={list.name} image={list.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
