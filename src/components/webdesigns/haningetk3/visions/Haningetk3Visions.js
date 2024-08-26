import React from "react";
import "./haningetk3visions.css";

import vision1 from "../assets/img/gladje.jpg";
import vision2 from "../assets/img/gemenskap.jpg";
import vision3 from "../assets/img/utveckling.jpg";

const Haningetk3Visions = () => {
  return (
    <div className="htk3-visions_container">
      <div className="htk3-visions_container-vision">
        <div className="htk3-visions_container-vision-image">
          <img src={vision1} alt="gladje" />
        </div>
        <div className="htk3-visions_container-vision-text">
          <h1>Glädje</h1>
          <p>
            Tennis är världens roligaste sport! Ur glädjen till sporten föds det
            motivation och ett gott självbefinnande. Glädje smittar och skapar
            en positiv kultur i klubben. Genom engagemang och glädje ska
            personalen ge av sitt kunnande så att alla känner sig välkomna i
            klubben.
          </p>
        </div>
      </div>
      <div className="htk3-visions_container-vision">
        <div className="htk3-visions_container-vision-image">
          <img src={vision2} alt="gemenskap" />
        </div>
        <div className="htk3-visions_container-vision-text">
          <h1>Gemenskap</h1>
          <p>
            Klubben ska vara inkluderande! Alla som vill och kan ska kunna vara
            med utifrån sina förutsättningar. Vi bygger vår klubb på tillsammans
            och ingen ska känna sig ensam i klubben. Gemenskapen skapar öppenhet
            och transparens och därigenom delaktiga medlemmar. Nolltolerans mot
            all slags mobbing. Vi värnar om klubbkänslan.
          </p>
        </div>
      </div>
      <div className="htk3-visions_container-vision">
        <div className="htk3-visions_container-vision-image">
          <img src={vision3} alt="utveckling" />
        </div>
        <div className="htk3-visions_container-vision-text">
          <h1>Utveckling</h1>
          <p>
            Alla ska känna att dom utvecklas i vår tennisklubb! Oavsett
            ambitionsnivå och spelstyrka. Klubben ska aldrig slå sig till ro
            utan hela tiden sträva efter att utveckla organisationen,
            verksamheten och dess anläggning. Vi ska alltid ligga i framkant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Visions;
