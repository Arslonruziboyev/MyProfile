import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpendNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpendNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
