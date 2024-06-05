import React from "react";
import "./haningetk4Main.css";

import img1 from "../assets/pexels-mutecevvil-22931876.jpg";
import img2 from "../assets/pexels-rdne-5836901.jpg";
import img3 from "../assets/pexels-elchino-portrait-774941174-20470948.jpg";

const Haningetk4Main = () => {
  return (
    <div className="htk4-main">
      <div id="htk4-main-content-section_1" className="htk4-main-content">
        <img src={img3} alt="img1" />
        <div className="htk4-main-content-desc">
          <h1>Tennisskola</h1>
          <p>
            Tennisskolan är öppen för både nybörjare och mer vana spelare av
            varierande åldrar - allt från minitennis till vuxengrupper.
          </p>
          <p>
            Tennisskolan löper terminsvis och pågår alla dagar i veckan, dock
            med uppehåll för skollov. Träningen pågår i regel under en timme per
            gång och standarduppsättningen är en tränare och 4-6 elever. Varje
            elev tränar en eller flera tillfällen per vecka enligt önskemål.
            Schemat läggs med avsikt att så långt det går skapa jämna grupper
            efter ålder och spelerfarenhet.
          </p>
          <button>Läs mer</button>
        </div>
      </div>

      <div id="htk4-main-content-section_2" className="htk4-main-content">
        <div className="htk4-main-content-desc">
          <h1>Tävlingar</h1>
          <p>
            Att tävla i tennis är för många barn väldigt stimulerande, spännande
            och utmanande. En match utvecklar dessutom i regel en spelares
            tennis betydligt mer än en enskild träningstimme. Idag kan barn
            börja tävla redan vid 6 års ålder. Junior är man fram till man fyllt
            18 år. Det finns ett stort utbud tävlingar för alla åldrar och
            kategorier.
          </p>
          <button>Läs mer</button>
        </div>
        <img src={img2} alt="img1" />
      </div>

      <div id="htk4-main-content-section_3" className="htk4-main-content">
        <img src={img1} alt="img1" />
        <div className="htk4-main-content-desc">
          <h1>Vision & Värdegrund</h1>
          <p>
            Vision - Haninge Tennisklubb ska vara den personliga tennisklubben
            där alla ska känna sig lika välkomna, engagemang och delaktighet
            uppmuntras, individen ges möjlighet till utveckling och efter sin
            egen ambitionsnivå uppnå sin högsta potential.
          </p>
          <p>
            Värdegrund - Verksamheten ska byggas på värdeorden Glädje, Gemenskap
            och Utveckling.
          </p>
          <button>Läs mer</button>
        </div>
      </div>
    </div>
  );
};

export default Haningetk4Main;
