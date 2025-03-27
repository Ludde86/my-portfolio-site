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
    </div>
  );
};

export default Aboutpage;
