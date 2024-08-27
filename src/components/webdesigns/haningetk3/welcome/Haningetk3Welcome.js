import React from "react";
import "./haningetk3Welcome.css";
import trana from "../assets/img/trana.mp4";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";

const Haningetk3Welcome = () => {
  return (
    <div className="htk3-welcome_container">
      <Haningetk3Navbar />
      <div className="htk3-welcome_container-video_container">
        <video width="400px" autoPlay muted loop>
          <source src={trana} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="htk3-welcome_container-section_container">
        <div className="htk3-welcome_container-title_container">
          {/*
          <h3>Tennisskola Tävlingar Inomhusbanor Utomhusbanor </h3>
          */}

          <div>
            <h2>Välkommen till</h2>
            <h1>Haninge tennisklubb</h1>
          </div>

          {/*
          <p>
            Vi har träningsgrupper för både ungdomar och vuxna samt
            privatträningar. Vi har även ett gruppspel som är öppen för alla!
          </p>
          */}

          <div className="htk3-welcome_container-title_container-button_container">
            <a
              href="https://www.matchi.se/forms/Jt3uUWLmTZWytQ0IJe0r"
              target="_blank"
              rel="noreferrer"
            >
              <button>Medlemskap</button>
            </a>
            <a
              href="https://www.matchi.se/forms/9g6MT0BuznTHBMOqbJDq"
              target="_blank"
              rel="noreferrer"
            >
              <button id="htk3-welcome_container-title_container-button_container-service-button">
                hösttermin 2024
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Welcome;
