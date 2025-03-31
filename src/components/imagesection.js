import React from "react";
import "./imagesection.css";
import energiScreen from "../img/energi-screen.png";
import byggScreen from "../img/bygg-screen.png";
import sakerhetScreen from "../img/sakerhet-screen.png";
import samhalleScreen from "../img/samhalle-screen.png";
import tennisScreen from "../img/tennis-screen.png";
import napraScreen from "../img/naprapat-screen.png";
import elScreen from "../img/elcomfort-1.png";
import napraScreen2 from "../img/napra-1.png";

const imagesection = () => {
  const imageSrcs = [
    energiScreen,
    byggScreen,
    sakerhetScreen,
    samhalleScreen,
    tennisScreen,
    napraScreen,
    elScreen,
    napraScreen2,
  ];

  return (
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
  );
};

export default imagesection;
