import React from 'react'
import "./skills.css"

export default function Skills() {
  return (
    <section id="skills" className="section d-flex align-items-center">
      <div className="container">
        <h2 className="section-title text-center">Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Marketing Skills</h3>
            <ul className='sills-ul'>
              <li>Marketing Consulting</li>
              <li>Digital Management</li>
              <li>Media Buying and Relations</li>
              <li>Copywriting</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Web Development Skills</h3>
            <ul className='sills-ul'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Back-end Development (Node.js)</li>
              <li>Front-end Development (React.js)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

