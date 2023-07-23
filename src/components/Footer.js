import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedinIcon />
        <InstagramIcon />
        <FacebookIcon />

        <GithubIcon />
      </div>
      <p>&copy; 2023 Aslan, all rights reserved</p>
    </div>
  );
}

export default Footer;
