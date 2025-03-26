import React, { useEffect, useRef } from "react";
import "./aboutpage.css";
import avatar from "../img/Ludvig-bw-3.jpg";
import vid from "../videos/coding-hero.mp4";

const Aboutpage = () => {
  const aboutPageContainerRef = useRef(null); // Skapa en ref

  useEffect(() => {
    console.log("Aboutpage useEffect triggas");
    const aboutPageContainer = document.querySelector(".aboutpage-container");
    if (aboutPageContainer) {
      console.log("Element hittades:", aboutPageContainer);
      aboutPageContainer.classList.add("fade-in");
    } else {
      console.log("Elementet hittades inte");
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
              Modern, lättnavigerad design skräddarsydd efter dina behov. Färdig
              hemsida inom två veckor. Kontakta mig idag för att modernisera din
              hemsida.
            </p>
            <button>Kontakta mig</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
