import React from "react";
import About from "./aboutme";
import Contact from "./contact";
import "./landingpage.css";

import reactLogo from "../img/react-icon.png";
import htmlLogo from "../img/html-icon.jpg";
import cssLogo from "../img/css-icon.png";
import javascriptLogo from "../img/java-script-icon.jpg";
import energiScreen from "../img/energi-screen.png";
import byggScreen from "../img/bygg-screen.png";
import sakerhetScreen from "../img/sakerhet-screen.png";

import avatar from "../img/avatar-1.png";

const Landing = () => {
  return (
    <div className="landing-container-grid">
      <div className="landing-container-grid-container landing-container-grid-row-span-2">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="landing-container-grid-container landing-container-grid-col-span-2">
        <div id="landing-container-grid-col-span-2-text">
          <p>Ludvig Björn</p>
          <p>Webbutvecklare- och designer</p>
        </div>
        <div id="landing-container-grid-col-span-2-text-underline"></div>
      </div>

      <div
        className="landing-container-grid-container"
        id="landing-container-grid-container-col-1"
      >
        <img src={reactLogo} alt="react-logo" />
      </div>
      <div
        className="landing-container-grid-container "
        id="landing-container-grid-container-col-1"
      >
        <img src={javascriptLogo} alt="javascrip-logo" />
      </div>
      <div
        className="landing-container-grid-container"
        id="landing-container-grid-container-col-1"
      >
        <img src={htmlLogo} alt="html-logo" />
      </div>
      <div
        className="landing-container-grid-container"
        id="landing-container-grid-container-col-1"
      >
        <img src={cssLogo} alt="css-logo" />
      </div>

      <div className="landing-container-grid-container landing-container-grid-col-span-2">
        <a href="/projects">
          <img src={energiScreen} alt="energi-screen" />
        </a>
      </div>
      <div className="landing-container-grid-container landing-container-grid-col-span-2">
        <a href="/projects">
          <img src={byggScreen} alt="bygg-screen" />
        </a>
      </div>
      <div className="landing-container-grid-container landing-container-grid-col-span-2">
        <a href="/projects">
          <img src={sakerhetScreen} alt="sakerhet-screen" />
        </a>
      </div>

      {/*
      <div className="landing-container-about">
        <About />
        <Contact />
      </div>
      <div className="skills-container">
        <text className="skills-text">
          React | React Native | JavaScript | HTML | CSS | Java
        </text>
      </div>
          */}
    </div>
  );
};

export default Landing;
