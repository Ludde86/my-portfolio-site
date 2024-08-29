import React from "react";
import "./haningeDesc2.css";
import bana1 from "../assets/img/utebana-1.jpg";
import PageHeaderHtk3 from "../components/pageHeader/PageHeaderHtk3";

const Haningetk3Desc2 = () => {
  return (
    <div className="htk3-desc2_container">
      <PageHeaderHtk3 header={"Våra banor"} />
      <div className="htk3-desc2_container-content">
        <div className="htk3-desc2_container-desc">
          <p>
            Haninge TK är en ideell tennisklubb belägen intill Torvalla
            idrottsanläggning. Vi har två nymålade banor med Plexipave
            beläggning. Dessutom har vi två grusbanor vid Sågen i Vendelsö.
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
          <img src={bana1} alt="bana1" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Haningetk3Desc2;
