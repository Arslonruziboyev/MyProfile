import React from "react";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h3>Hi, my name is Arslon Ruziboev</h3>
        <div className="prompt">
          <p>A software developer with a passion for learing and creating</p>
          <LinkedinIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End (Web Developing)</h2>

            <span>
              HTML, HTML3, CSS, CSS3 (Flexbox/Grid/Scss), Responsive Design,
              Bootstrap, JavaScript (TypeScript), React (React Hooks), Git and
              GitHub, Restful API, NPM, Working with Office Programs
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Uzbek, English, Korean</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
