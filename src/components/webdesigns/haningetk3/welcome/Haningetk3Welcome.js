import React from "react";
import "./haningetk3Welcome.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";

const Haningetk3Welcome = () => {
  return (
    <div className="htk3-welcome_container">
      <Haningetk3Navbar />
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
            <button>
              <a
                href="https://www.matchi.se/facilities/haningetk"
                target="_blank"
                rel="noreferrer"
              >
                Boka Bana
              </a>
            </button>
            <button id="htk3-welcome_container-title_container-button_container-service-button">
              <a href="#Hem">Bli Medlem</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Welcome;
