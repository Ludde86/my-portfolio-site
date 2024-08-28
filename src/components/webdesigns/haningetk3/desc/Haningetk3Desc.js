import React from "react";
import "./haningeDescPage.css";
import logo from "../assets/img/logga-medium_nobg.png";

const Haningetk3Desc = () => {
  return (
    <div id="desc" className="htk3-desc_container">
      <div className="htk3-desc_container-empty">
        <img src={logo} alt="logo" />
      </div>
      <div className="htk3-desc_container-desc">
        <p>
          Haninge Tennisklubb är den personliga tennisklubben där alla ska känna
          sig lika välkomna, här uppmuntras engagemang och delaktighet,
          individen ges möjlighet till utveckling och efter sin egen
          ambitionsnivå uppnå sin högsta potential!
        </p>
        <a
          href="https://www.matchi.se/forms/Jt3uUWLmTZWytQ0IJe0r"
          target="_blank"
          rel="noreferrer"
        >
          <button>Bli medlem</button>
        </a>
      </div>
    </div>
  );
};

export default Haningetk3Desc;
