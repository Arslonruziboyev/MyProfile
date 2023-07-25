import React from "react";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  return (
    <div className="projects">
      <h1>My own projects</h1>
      <div className="projectLists">
        <ProjectItem />
      </div>
    </div>
  );
}

export default Projects;
