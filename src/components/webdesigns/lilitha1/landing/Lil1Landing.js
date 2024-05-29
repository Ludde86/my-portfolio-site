import React from "react";
import "./lil1Landing.css";
import Lil1Navbar from "../navbar/Lil1Navbar";

const Lil1Landing = () => {
  return (
    <div id="landing" className="lil1_landing_container grid-container">
      <Lil1Navbar />
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="lil1_landing_container-welcome_text grid-item">
        <h1 className="lil1_landing_container-welcome_text-sub">
          Välkommen till
        </h1>
        <h1 className="lil1_landing_container-welcome_text-main">
          Lilitha Hex Design
        </h1>
      </div>
      <div className="grid-item"></div>
    </div>
  );
};

export default Lil1Landing;
