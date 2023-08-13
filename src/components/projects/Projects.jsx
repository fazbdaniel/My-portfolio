import React from 'react'
import './projects.css';
import projects from "../../assets/projects.json"
import burger from "../../assets/burger.jpg"

export default function Projects() {
  return (
    <div id='project'>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-sm-6" key={project.id}>
              <div className="project-card">
                <img src={burger} alt={project.title} />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className='project-link'><a href={project.link} target='_blank' rel="noreferrer">Go to project code</a></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
