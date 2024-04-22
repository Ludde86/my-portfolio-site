import React from "react";
import "./haningetk3Welcome.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";

const Haningetk3Welcome = () => {
  return (
    <div className="htk3-welcome_container">
      <Haningetk3Navbar />
      <div className="htk3-welcome_container-section_container">
        <div className="htk3-welcome_container-title_container">
          <h2>Välkommen till</h2>
          <h1>Haninge tennisklubb</h1>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Welcome;
