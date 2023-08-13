import React from "react";
import "./home.css";
import dani_1 from "../../assets/dani_1.png";
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
          <img src={dani_1} alt="Profile" data-aos="flip-right" className="profile-picture img-fluid" />
          <div className="social-icons">
            <a href="https://github.com/fazbdaniel"  target="_blank" rel="noopener noreferrer">
              <GitHub data-aos="fade-right" data-aos-delay="1000"/>
            </a>
            <a href="https://baguma.medium.com/" target="_blank" rel="noopener noreferrer">
              <Language data-aos="fade-right" data-aos-delay="1000" />
            </a>
            <a href="https://twitter.com/BagumaFazili" target="_blank" rel="noopener noreferrer">
              <Twitter data-aos="fade-right" data-aos-delay="1000"/>
            </a>
            <a href="https://facebook.com/daniel.baguma.5" target="_blank" rel="noopener noreferrer">
              <Facebook data-aos="fade-right" data-aos-delay="1000"/>
            </a>
            <a href="https://www.instagram.com/fazbdaniel/" target="_blank" rel="noopener noreferrer">
              <Instagram data-aos="fade-right" data-aos-delay="1000"/>
            </a>
            <a href="https://www.linkedin.com/in/fazili-baguma-1127301b2/" target="_blank" rel="noopener noreferrer">
              <LinkedIn data-aos="fade-right" data-aos-delay="1000"/>
            </a>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-right">
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
