import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/te";
import GithubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/arslon-ruziboev-a92385198/">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/Arslonruziboyev">
          <GithubIcon />
        </a>
        <a href="https://t.me/arslon_ruziboev">
          <TelegramIcon />
        </a>

        <InstagramIcon />
        <FacebookIcon />
      </div>
      <p>&copy; 2023 Aslan, all rights reserved</p>
    </div>
  );
}

export default Footer;
