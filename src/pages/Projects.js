import React from "react";
import ProjectItem from "../components/ProjectItem";
import Img1 from "../assets/proj2.jpg";
import Img2 from "../assets/proj5.jpg";

function Projects() {
  return (
    <div className="projects">
      <h1>My own projects</h1>
      <div className="projectLists">
        <ProjectItem name="Social Media Website" image={Img1} />
        <ProjectItem name="Social Media Website" image={Img2} />
      </div>
    </div>
  );
}

export default Projects;
