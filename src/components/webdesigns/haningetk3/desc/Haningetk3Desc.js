import React from "react";
import "./haningeDescPage.css";
import logo from "../assets/img/logga-medium_nobg.png";
import PageHeaderHtk3 from "../components/pageHeader/PageHeaderHtk3";

const Haningetk3Desc = () => {
  return (
    <div id="desc" className="htk3-desc_container">
      <PageHeaderHtk3 header={"Medlemskap"} />
      <div className="htk3-desc_container-content">
        <div className="htk3-desc_container-empty">
          <img src={logo} alt="logo" />
        </div>
        <div className="htk3-desc_container-desc">
          <p>
            Välkommen till vår tennisklubb! Här hos oss är alla välkomna,
            oavsett ålder eller erfarenhetsnivå. Vi erbjuder en varm och
            inkluderande miljö där både nybörjare och erfarna spelare kan
            utvecklas och ha kul. Oavsett om du vill finslipa dina färdigheter,
            träffa nya vänner eller bara njuta av spelet, har vi något för dig.
            Kom och bli en del av vår gemenskap, där glädjen för tennis förenar
            oss alla!
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
      <div></div>
    </div>
  );
};

export default Haningetk3Desc;
