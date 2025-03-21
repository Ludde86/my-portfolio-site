import React, { useEffect } from "react";
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
import { useState } from "react";

const Landing = () => {
  const [imageSrcs, setImageSrcs] = useState([
    energiScreen,
    byggScreen,
    sakerhetScreen,
    samhalleScreen,
    tennisScreen,
    napraScreen,
    elScreen,
    napraScreen2,
  ]);

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
          <div className="text-section">
            {/*
            <h1>
              Låt oss skapa en webbplats som gör er till det självklara valet
            </h1>
              */}
            <h1>Låt oss skapa en webbplats som imponerar på era besökare.</h1>
            <p>
              Modern, lättnavigerad design skräddarsydd efter era behov. Färdig
              hemsida inom två veckor.
            </p>
          </div>
          <div className="image-section">
            <div className="image-container">
              <img
                className="overlay-image large"
                src={imageSrcs[7]}
                alt="Stor Bild"
              />
              <img
                className="overlay-image small top-left"
                src={imageSrcs[1]}
                alt="Bild 1"
              />
              <img
                className="overlay-image small top-right"
                src={imageSrcs[2]}
                alt="Bild 2"
              />
              <img
                className="overlay-image small bottom-left"
                src={imageSrcs[4]}
                alt="Bild 3"
              />
              <img
                className="overlay-image small bottom-right"
                src={imageSrcs[3]}
                alt="Bild 4"
              />
              <img
                className="overlay-image small middle-left"
                src={imageSrcs[0]}
                alt="Bild 5"
              />
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
        <p>Orgnummer: 198608050673</p>
      </footer>
    </div>
  );
};

export default Landing;
