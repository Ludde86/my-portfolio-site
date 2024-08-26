import React from "react";
import "./haningeDesc2.css";
import logo from "../assets/img/logga-medium_nobg.png";

const Haningetk3Desc2 = () => {
  return (
    <div className="htk3-desc2_container">
      <div className="htk3-desc2_container-desc">
        <p>
          Haninge TK är en ideell tennisklubb belägen intill Torvalla
          idrottsanläggning. Vi har två nymålade banor med Plexipave beläggning.
          Dessutom har vi två grusbanor vid Sågen i Vendelsö.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.matchi.se/facilities/haningetk"
        >
          <button className="hero_container-button-act_button">
            Boka bana
          </button>
        </a>
      </div>
      <div className="htk3-desc2_container-empty">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Haningetk3Desc2;
