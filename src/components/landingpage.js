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
import samhalleScreen from "../img/samhalle-screen.png";
import tennisScreen from "../img/tennis-screen.png";
import napraScreen from "../img/naprapat-screen.png";
import elScreen from "../img/elcomfort-1.png";
import napraScreen2 from "../img/napra-1.png";

import avatar from "../img/Ludvig-bw-3.jpg";
import vid from "../videos/coding-hero.mp4";
import { ArrowDownRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="container">
        <video
          className="background-video"
          type="video/mp4"
          autoPlay
          playsInline
          loop
          muted
          preload="metadata"
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="image-and-text">
            <img src={avatar} alt="Example" className="overlay-image" />
            <div className="text-content">
              <h1>Ludvig Björn</h1>
              <h1 className="text-content-background">Webbutvecklare</h1>
              <p>
                Modern, lättnavigerad design skräddarsydd efter dina behov.
                Färdig hemsida inom två veckor. Kontakta mig idag för att
                modernisera din hemsida.
              </p>
              <button>Kontakta mig</button>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-container-grid">
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
            <p id="blue">Mina senaste projekt</p>
          </div>
          <a
            href="/projects"
            className="landing-container-grid-col-span-2-text-icon"
          >
            <ArrowDownRight
              size={40}
              id="landing-container-grid-col-span-2-text-icon-icon"
            />
          </a>
          <div id="landing-container-grid-col-span-2-text">
            <p id="blue">Din hemsida kan se ut så här</p>
          </div>
          <div
            className="landing-container-grid-col-span-2-text-underline"
            id="blue-underline"
          ></div>
        </div>

        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="https://www.napracura.se/" target="_blank" rel="noreferrer">
            <img src={napraScreen2} alt="energi-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a
            href="https://elcomfort-2.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={elScreen} alt="energi-screen" />
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
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={samhalleScreen} alt="sakerhet-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={tennisScreen} alt="tennis-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={napraScreen} alt="napra-screen" />
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
      <About />
      <Contact />
      <Whatis />
      <footer className="footer">
        <p>Kontakt: bslbjorn@gmail.com</p>
        <p>Ludvig Björn &copy; 2025</p>
        <p>Orgnummer: 123456-7890</p>
      </footer>
    </div>
  );
};

export default Landing;
