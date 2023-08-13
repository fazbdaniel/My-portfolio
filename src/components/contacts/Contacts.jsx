import React from "react";
import "./contacts.css";
import { Twitter, LinkedIn, GitHub, Facebook, Instagram, Language } from "@mui/icons-material";

export default function Contacts() {
  return (
    <div id="contact">
      <div className="container">
        <h3 className="contact-title text-center">Contacts</h3>
        <div className="text-center">
          <p>tel: (256) 7848 68029</p>
          <p>E-mail: baguma82@gmail.com</p>
        </div>
        <div className="text-center">
        <div className="social-icons_contacts">
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
      </div>
    </div>
  );
}
