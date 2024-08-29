import React from "react";
import "./aboutHtk3.css";

import PageHeaderHtk3 from "../components/pageHeader/PageHeaderHtk3";

const AboutHtk3 = () => {
  return (
    <div className="htk3-about_container">
      <PageHeaderHtk3 header="Haninge Tennisklubb" />
      <div className="htk3-about_container-content">
        <p>
          Haninge TK är en ideell tennisklubb belägen intill Torvalla
          idrottsanläggning. Vi har två banor med Latex-Ite beläggning i vår
          tennishall i Torvalla och två utebanor med grus som ligger belägna i
          sågen, Haningevallens område.
        </p>
        <p>
          I föreningen arbetar vi alla aktivt med vår vision och våra
          värdegrunder. Tennis är för alla, engagemang, glädje, Gemenskap och
          Utveckling förenar oss. Vi bedriver träningsgrupper för, Mini Tennis,
          barn och ungdomar och vuxna. Eller om de är privatträning som du
          eftersöker.
        </p>
        <p>
          Klubben har sitt egna gruppspel för nivå nybörjare till elitnivå och
          olika tävlingar/event under året. Som medlem hos oss får du förmånligt
          pris på strötider och får tillgång att delta i våra tävlingar och
          gruppspel. Har du några frågor tveka inte att höra av dig till oss.
          Varmt välkommen till oss på Haninge Tennisklubb.
        </p>
      </div>
    </div>
  );
};

export default AboutHtk3;
