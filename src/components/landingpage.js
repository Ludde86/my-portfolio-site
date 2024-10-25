import React from "react";
import About from "./aboutme";
import Contact from "./contact";
import Whatis from "./whatis";
import "./landingpage.css";

import reactLogo from "../img/react-icon.png";
import htmlLogo from "../img/html-icon.jpg";
import cssLogo from "../img/css-icon.png";
import javascriptLogo from "../img/java-script-icon.jpg";
import energiScreen from "../img/energi-screen.png";
import byggScreen from "../img/bygg-screen.png";
import sakerhetScreen from "../img/sakerhet-screen.png";

import avatar from "../img/avatar-1.png";
import { ArrowDownRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-container-grid">
        <div className="landing-container-grid-container landing-container-grid-row-span-2">
          <a href="/resume">
            <img src={avatar} alt="avatar" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <div id="landing-container-grid-col-span-2-text">
            <p>Ludvig Björn</p>
            <p>Webbutvecklare- och designer</p>
          </div>
          <div className="landing-container-grid-col-span-2-text-underline"></div>
        </div>

        <div
          className="landing-container-grid-container"
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-react">
            <img src={reactLogo} alt="react-logo" />
          </a>
        </div>
        <div
          className="landing-container-grid-container "
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-javascript">
            <img src={javascriptLogo} alt="javascrip-logo" />
          </a>
        </div>
        <div
          className="landing-container-grid-container"
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-html">
            <img src={htmlLogo} alt="html-logo" />
          </a>
        </div>
        <div
          className="landing-container-grid-container"
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-css">
            <img src={cssLogo} alt="css-logo" />
          </a>
        </div>

        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <div id="landing-container-grid-col-span-2-text">
            <p id="green">Din hemsida kan se ut så här</p>
          </div>
          <div
            className="landing-container-grid-col-span-2-text-underline"
            id="green-underline"
          ></div>
          <a
            href="/projects"
            className="landing-container-grid-col-span-2-text-icon"
          >
            <ArrowDownRight
              size={40}
              id="landing-container-grid-col-span-2-text-icon-icon"
            />
          </a>
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
      <Contact />
      <Whatis />
    </div>
  );
};

export default Landing;
