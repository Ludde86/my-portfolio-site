import React from "react";
import "./haningeDescPage.css";
import logo from "../assets/img/logga-medium_nobg.png";
import welcome from "../assets/vid/valkommen-1.mp4";
import PageHeaderHtk3 from "../components/pageHeader/PageHeaderHtk3";

const Haningetk3Desc = () => {
  return (
    <div id="desc" className="htk3-desc_container">
      <PageHeaderHtk3 header={"Haninge Tennisklubb"} />
      <div className="htk3-desc_container-content">
        <div className="htk3-desc_container-first">
          <img src={logo} alt="logo" />
          <div className="htk3-desc_container-first-desc">
            <p>
              Haninge TK är en ideell tennisklubb belägen intill Torvalla
              idrottsanläggning. Vi har två banor med Latex-Ite beläggning i vår
              tennishall i Torvalla och två utebanor med grus som ligger belägna
              i sågen, Haningevallens område
            </p>
            <p>
              Vi bedriver träningsgrupper för minitennis, barn, ungdomar och
              vuxna. Eller om det är privatträning som du eftersöker.
            </p>
            <p>
              Som medlem hos oss får du förmånligt pris på strötider och får
              tillgång att delta i våra tävlingar och gruppspel. Har du några
              frågor tveka inte på att höra av dig till oss.
            </p>
            <p>Varmt välkommen till oss på Haninge Tennisklubb.</p>
          </div>
        </div>
        <div className="htk3-desc_container-second">
          <div className="htk3-desc_container-second-desc">
            <video width="400px" autoPlay muted loop>
              <source src={welcome} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>
              Välkommen till vår tennisklubb! Här hos oss är alla välkomna,
              oavsett ålder eller erfarenhetsnivå. Vi erbjuder en varm och
              inkluderande miljö där både nybörjare och erfarna spelare kan
              utvecklas och ha kul. Oavsett om du vill finslipa dina
              färdigheter, träffa nya vänner eller bara njuta av spelet, har vi
              något för dig.
            </p>
            <p>
              Kom och bli en del av vår gemenskap, där glädjen för tennis
              förenar oss alla!
            </p>
          </div>

          {/*
          <a
            href="https://www.matchi.se/forms/Jt3uUWLmTZWytQ0IJe0r"
            target="_blank"
            rel="noreferrer"
          >
            <button>Våra banor</button>
          </a>
 */}
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Desc;
