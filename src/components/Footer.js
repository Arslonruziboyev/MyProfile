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
        <a href="https://www.linkedin.com/in/arslon-ruziboev-a92385198/">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/roziboyevarslon/">
          {" "}
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/arslon.ruziboyev.3/">
          <FacebookIcon />
        </a>
        <a href="https://github.com/Arslonruziboyev">
          <GithubIcon />
        </a>
      </div>
      <p>&copy; 2023 Aslan, all rights reserved</p>
    </div>
  );
}

export default Footer;
