import React from "react";
import "./lil1Landing.css";
import Lil1Navbar from "../navbar/Lil1Navbar";

const Lil1Landing = () => {
  return (
    <div className="lil1_landing_container grid-container">
      <Lil1Navbar />
      <div className="grid-item">1</div>
      <div className="grid-item">2</div>
      <div className="lil1_landing_container-welcome_text grid-item">
        <h1>Välkommen till</h1>
        <h1 className="color_gold" style={{ fontSize: "3rem" }}>
          Lilitha Hex Design
        </h1>
      </div>
      <div className="grid-item">4</div>
    </div>
  );
};

export default Lil1Landing;
