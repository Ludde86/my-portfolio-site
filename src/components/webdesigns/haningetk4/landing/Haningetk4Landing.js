import React from "react";
import "./haningetk4Landing.css";

const Haningetk4Landing = () => {
  return (
    <div className="haninge4_landing">
      <div className="htk4_landing-grid_content">
        <div className="haninge4_landing-welcome_text">
          <h3>Välkommen till</h3>
          <h1>Haninge Tennisklubb</h1>
        </div>
      </div>
      <div className="htk4_landing-grid_content"></div>
      <div className="htk4_landing-grid_content">
        <button className="haninge4_landing-button haninge4_landing-action_button">
          Bli medlem
        </button>
      </div>
      <div className="htk4_landing-grid_content">
        <button className="haninge4_landing-button haninge4_landing-sub_button">
          Boka bana
        </button>
      </div>
      <div className="haninge4_landing-vision_text">
        <p>
          Vi är den personliga tennisklubben där alla ska känna sig lika
          välkomna, där individen ges möjlighet till utveckling och efter sin
          egen ambitionsnivå uppnå sin högsta potential.
        </p>
      </div>
    </div>
  );
};

export default Haningetk4Landing;
