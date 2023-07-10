import React from 'react'
import './education.css'
import education from "../../assets/education.json"

export default function Education() {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-11">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#education"
                >
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#internship">
                  Internship
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {education.map((item, i) => (
                  <div className="educationblock" key={i}>
                    <div className="row" key={i}>
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">
                          {item.year}
                        </h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright">
                          <h5 data-aos="fade-left">{item.qualification} </h5>
                          <h6 data-aos="fade-left"> {item.institution}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="internship">
                <div className="educationblock">
                  <div className="row">
                    <div className="col-sm-4">
                      <h5 data-aos="fade-right">Jan, 2019 - May, 2019</h5>
                    </div>
                    <div className="col-sm-8">
                      <div className="educationright" data-aos="fade-left">
                        <h5>Infibeam Avenues Limited</h5>
                        <h6>Project - "E-Commerce and Retailing System"</h6>
                        <h6>
                          - HTML, CSS, Bootstrap, Javascript, jQuery
                          <br />
                          - Wordpress
                          <br />
                          - Customize Themes
                          <br />
                          - Woocommerce
                          <br />- Stripe
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
