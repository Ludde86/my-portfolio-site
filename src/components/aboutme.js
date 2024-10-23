import React from "react";
import "./aboutme.css";
import avtar from "../img/avatar-contact-small.png";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-image">
        <img src={avtar} alt="avatar" />
      </div>
      <div className="about-me-text">
        <div className="about-me-text-row">
          <h3>Namn:</h3>
          <h1>Ludvig Björn</h1>
        </div>

        <div className="about-me-text-row">
          <h3>Ålder:</h3>
          <h1>38</h1>
        </div>

        <div className="about-me-text-row">
          <h3>Yrke:</h3>
          <h1>Webbutvecklare- och designer</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
