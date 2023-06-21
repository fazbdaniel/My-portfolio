import React from "react";
import "./home.css";
import dani_1 from "../../assets/dani_1.jpg";
// import Button from "@mui/material/Button";
import { Twitter, LinkedIn, GitHub, Facebook, Instagram, Language } from "@mui/icons-material";

export default function Home() {
  const handleResumeClick = () => {
    // Handle the resume button click event here
  };

  return (
    <div className="home-section d-flex align-items-center" id="home">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={dani_1} alt="Profile" className="profile-picture" />
          <div className="social-icons">
            <a href="https://github.com/fazbdaniel"  target="_blank" rel="noopener noreferrer">
              <GitHub />
            </a>
            <a href="https://baguma.medium.com/" target="_blank" rel="noopener noreferrer">
              <Language />
            </a>
            <a href="https://twitter.com/BagumaFazili" target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
            <a href="https://facebook.com/daniel.baguma.5" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/fazbdaniel/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/fazili-baguma-1127301b2/" target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="identification">
            <h1 className="name">Fazili Baguma Daniel</h1>
            <h2 className="title">Web Developer / Marketer</h2>
          </div>
          <button
            variant="contained"
            onClick={handleResumeClick}
            className="resume-button"
          >
            Resume
          </button>
          <a href="#about">
          <button
            variant="contained"
            className="about-button"
          >
            About
          </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
