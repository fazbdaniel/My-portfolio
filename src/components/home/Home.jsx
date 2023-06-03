import React from "react";
import "./home.css";
import dani_1 from "../../assets/dani_1.jpg";

export default function Home() {
  return (
    <div id="home">
      <div className="col-lg-6">
        <div className="home_text">
          <h6 className="home_h6">Hello, I am</h6>
          <h1 className="home_h1">Fazili Baguma Daniel</h1>
          <span>I Am Passionate</span>
          <p>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <button className="btn btn-danger">Download CV</button>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="home_image">
          <img src={dani_1} alt="dani" />
        </div>
      </div>
    </div>
    // <div id='home'>
    //   <div className='home_text'>
    //     <h6 className='home_h6'>Hello, I am</h6>
    //     <h1 className='home_h1'>Fazili Baguma Daniel</h1>
    //     <span>I Am Passionate</span>
    //     <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
    //     <button className='btn btn-danger'>Download CV</button>
    //   </div>
    //   <div className='home_image'>
    //     <img src={dani_1} alt="dani" />
    //   </div>
    // </div>
  );
}
