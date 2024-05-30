import React from "react";
import "./lil1Landing.css";
import Lil1Navbar from "../navbar/Lil1Navbar";
import img1 from "../assets/bakgrund-bla.jpeg";
import img2 from "../assets/bakgrund-gul.jpeg";
import img3 from "../assets/brun-skog.jpeg";

const Lil1Landing = () => {
  return (
    <div id="landing" className="lil1_landing_container grid-container">
      <Lil1Navbar />
      <div className="grid-item">
        <img
          src={img1}
          alt="img1"
          className="lil1_landing_container-image"
          id="lil1_landing_container-image-1"
        />
      </div>
      <div className="grid-item">
        <img
          src={img2}
          alt="img2"
          className="lil1_landing_container-image"
          id="lil1_landing_container-image-2"
        />
      </div>
      <div className="lil1_landing_container-welcome_text grid-item">
        <h1 className="lil1_landing_container-welcome_text-sub">
          Välkommen till
        </h1>
        <h1 className="lil1_landing_container-welcome_text-main">
          Lilitha Hex Design
        </h1>
      </div>
      <div className="grid-item">
        <img
          src={img3}
          alt="img3"
          className="lil1_landing_container-image"
          id="lil1_landing_container-image-3"
        />
      </div>
    </div>
  );
};

export default Lil1Landing;
