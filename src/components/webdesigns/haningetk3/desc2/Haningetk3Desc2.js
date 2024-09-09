import React from "react";
import "./haningeDesc2.css";
import vision1 from "../assets/img/barn-tennis.png";
import PageHeaderHtk3 from "../components/pageHeader/PageHeaderHtk3";

const Haningetk3Desc2 = () => {
  var screenWidth = window.screen.width;

  return (
    <div className="htk3-desc2_container">
      <PageHeaderHtk3
        header={"Vision och värdegrund"}
        color={screenWidth < 560 ? "#fff" : undefined}
      />
      {screenWidth < 560 ? (
        <div className="htk3-desc2_container-content">
          <div className="htk3-desc2_container-desc">
            <p>
              Haninge Tennisklubb ska vara den personliga tennisklubben där alla
              ska känna sig lika välkomna, engagemang och delaktighet
              uppmuntras, individen ges möjlighet till utveckling och efter sin
              egen ambitionsnivå uppnå sin högsta potential.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.matchi.se/facilities/haningetk"
            >
              <button className="hero_container-button-act_button">
                Bli medlem
              </button>
            </a>
          </div>
          <div className="htk3-desc2_container-empty">
            <img src={vision1} alt="vision1" />
          </div>
        </div>
      ) : (
        <>
          <div className="htk3-desc2_container-content">
            <div className="htk3-desc2_container-empty">
              <img src={vision1} alt="vision1" />
            </div>
            <div className="htk3-desc2_container-desc">
              <p>
                Haninge Tennisklubb ska vara den personliga tennisklubben där
                alla ska känna sig lika välkomna, engagemang och delaktighet
                uppmuntras, individen ges möjlighet till utveckling och efter
                sin egen ambitionsnivå uppnå sin högsta potential.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.matchi.se/facilities/haningetk"
              >
                <button className="hero_container-button-act_button">
                  Bli medlem
                </button>
              </a>
            </div>
          </div>
          <div></div>
        </>
      )}
    </div>
  );
};

export default Haningetk3Desc2;
