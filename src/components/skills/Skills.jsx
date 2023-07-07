import React, { useState } from "react";
import "./skills.css";
import { ScreenshotMonitor, Campaign, WrapText } from "@mui/icons-material";

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <div className="row">
          <div className="col-lg-4">
            <div
              className={`service-card ${hoveredCard === 0 ? "hovered" : ""}`}
              onMouseEnter={() => handleCardHover(0)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {hoveredCard !== 0 && (
                <React.Fragment>
                  <div className="service-icon">
                    <i>
                      <ScreenshotMonitor />
                    </i>
                  </div>
                  <h3 className="service-title">Web Development</h3>
                </React.Fragment>
              )}
              {hoveredCard === 0 && (
                <ul className="skills-list">
                  {["HTML", "CSS", "JavaScript", "Node.js", "React"].map(
                    (skill, index) => (
                      <li key={index}>{skill}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className={`service-card ${hoveredCard === 1 ? "hovered" : ""}`}
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {hoveredCard !== 1 && (
                <React.Fragment>
                  <div className="service-icon">
                    <i>
                      <Campaign />
                    </i>
                  </div>
                  <h3 className="service-title">Marketing</h3>
                </React.Fragment>
              )}

              {hoveredCard === 1 && (
                <ul className="skills-list">
                  {["Marketing", "Digital", "Social Media", "SEO & SEM"].map(
                    (skill, index) => (
                      <li key={index}>{skill}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className={`service-card ${hoveredCard === 2 ? "hovered" : ""}`}
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {hoveredCard !== 2 && (
                <React.Fragment>
                  <div className="service-icon">
                    <i>
                      <WrapText />
                    </i>
                  </div>
                  <h3 className="service-title">Copywriting</h3>
                </React.Fragment>
              )}
              {hoveredCard === 2 && (
                <ul className="skills-list">
                  {["Ads Copy", "Sales Copy", "Creative Contents"].map(
                    (skill, index) => (
                      <li key={index}>{skill}</li>
                    )
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
