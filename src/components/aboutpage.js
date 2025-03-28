import React, { useEffect, useRef } from "react";
import "./aboutpage.css";
import avatar from "../img/Ludvig-bw-3.jpg";
import vid from "../videos/coding-hero.mp4";

import reactLogo from "../img/react-icon.png";
import htmlLogo from "../img/html-icon.jpg";
import cssLogo from "../img/css-icon.png";
import javascriptLogo from "../img/java-script-icon.jpg";
import Whatis from "./whatis";

const Aboutpage = () => {
  const aboutPageContainerRef = useRef(null); // Skapa en ref

  useEffect(() => {
    console.log("Aboutpage useEffect triggas");

    // Kontrollera om refen är kopplad till ett element
    if (aboutPageContainerRef.current) {
      console.log("Element hittades via ref:", aboutPageContainerRef.current);
      aboutPageContainerRef.current.classList.add("fade-in"); // Lägg till fade-in-klassen
    } else {
      console.log("Elementet hittades inte via ref");
    }
  }, []);

  return (
    <div ref={aboutPageContainerRef} className="aboutpage-container">
      <video
        className="aboutpage-container-background-video"
        type="video/mp4"
        autoPlay
        playsInline
        loop
        muted
        preload="metadata"
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="aboutpage-container-overlay">
        <div className="aboutpage-container-image-and-text">
          <img
            src={avatar}
            alt="Example"
            className="aboutpage-container-overlay-image"
          />
          <div className="aboutpage-container-text-content">
            <h1>Ludvig Björn</h1>
            <h1 className="aboutpage-container-text-content-background">
              Webbutvecklare
            </h1>
            <p>
              Letar du efter en modern, lättnavigerad och stilren webbplats? Jag
              hjälper företag, föreningar och privatpersoner att skapa snygga
              och funktionella hemsidor.
            </p>
            <p>
              Behöver du modernisera en befintlig webbplats? Med fem års
              erfarenhet inom webbutveckling kan jag hjälpa till att ge din
              hemsida ett fräscht och uppdaterat utseende.
            </p>
            <p>
              Tveka inte att höra av dig om du har frågor eller vill diskutera
              ditt projekt.
            </p>
            <button>
              <a href="mailto:bslbjorn@gmail.com">Kontakta mig</a>
            </button>
          </div>
        </div>
      </div>

      <div className="main-about-container">
        <div
          className="about-container-grid-container"
          id="about-container-grid-container-col-1"
        >
          <a href="#goto-react">
            <img src={reactLogo} alt="react-logo" />
          </a>
        </div>
        <div
          className="about-container-grid-container "
          id="about-container-grid-container-col-1"
        >
          <a href="#goto-javascript">
            <img src={javascriptLogo} alt="javascrip-logo" />
          </a>
        </div>
        <div
          className="about-container-grid-container"
          id="about-container-grid-container-col-1"
        >
          <a href="#goto-html">
            <img src={htmlLogo} alt="html-logo" />
          </a>
        </div>
        <div
          className="about-container-grid-container"
          id="about-container-grid-container-col-1"
        >
          <a href="#goto-css">
            <img src={cssLogo} alt="css-logo" />
          </a>
        </div>
      </div>

      <Whatis />

      <div className="landing-container-about"></div>
      <div className="skills-container">
        <text className="skills-text">
          React | React Native | JavaScript | HTML | CSS | Java
        </text>
      </div>
    </div>
  );
};

export default Aboutpage;
