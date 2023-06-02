import React from "react";
import "./about.css";
import dani_1 from "../../assets/dani_1.jpg";

export default function About() {
  return (
    <div id="about">
      <div className="about_image">
        <img src={dani_1} alt="dani" />
      </div>

      <div className="about_text">
        <h4>ABOUT ME.</h4>
        <div id="bar"/>
        <h3>
          I'm a Freelancer Front-end Developer with over 3 years of experience.
        </h3>
        <p>
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I code and create web elements for amazing
          people around the world. I like work with new people. New people new
          Experiences.
        </p>
        <div className="about_buttons">
          <button className="about_contact">
            <a href="#contact">Contact me</a>
          </button>
          <button className="about_skills">
            <a href="#skills">Skills</a>
          </button>
        </div>
      </div>
    </div>
  );
}
