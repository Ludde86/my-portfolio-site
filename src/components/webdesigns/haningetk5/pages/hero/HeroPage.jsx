import { ArrowRight, ChevronsDown } from "lucide-react";
import "./heroPage.css";
import { useEffect } from "react";
import React from "react";

const HeroPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="hero_container">
      <div className="hero_container-text">
        <h2>Välkommen till</h2>
        <div className="hero_container-text-h1">
          <h1>TYRESÖ </h1>
          <h1>TENNISKLUBB</h1>
        </div>
        <p>Den anrika tennisklubben på Brevikshalvön</p>
      </div>

      <div className="hero_container-button">
        <button className="hero_container-button-sub_button">
          <p>Bli medlem</p>
          <ArrowRight className="hero_container-button-sub_button-arrow_right" />
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
