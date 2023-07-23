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
            <h2>Front-End</h2>
            <span>Html, Css, JavaScript</span>
          </li>
          <li className="item">
            <h2>Languaged</h2>
            <span>Uzbek, English, Korean</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
