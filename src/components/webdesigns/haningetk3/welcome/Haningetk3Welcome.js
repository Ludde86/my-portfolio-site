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

      <div className="htk3-welcome_container-title_container">
        <h2>Välkommen till</h2>
        <h1>Haninge</h1>
        <h1>tennisklubb</h1>
      </div>
      <div className="htk3-welcome_container-button_container">
        <a
          href="https://www.matchi.se/forms/Jt3uUWLmTZWytQ0IJe0r"
          target="_blank"
          rel="noreferrer"
        >
          <button>Medlemskap</button>
        </a>

        <a href="/projects/htk3/varabanor">
          <button id="htk3-welcome_container-service-button">Våra banor</button>
        </a>
      </div>
    </div>
  );
};

export default Haningetk3Welcome;
