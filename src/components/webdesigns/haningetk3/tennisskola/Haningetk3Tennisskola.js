import React, { useContext } from "react";
import "./haningetk3tennisskola.css";
import { ArrowLeft } from "lucide-react";
import { Htk3Context } from "../Haningetk3App";

const Haningetk3Tennisskola = () => {
  const htk3 = useContext(Htk3Context);

  return (
    <div className="htk3-tennisskola_container">
      <div className="htk3-tennisskola_container-desc_container">
        <h2>Tennisskola</h2>
        <p>
          Tennisskolan är öppen för både nybörjare och mer vana spelare av
          varierande åldrar - allt från minitennis till vuxengrupper.
        </p>
        <p>
          Tennisskolan löper terminsvis och pågår alla dagar i veckan, dock med
          uppehåll för skollov. Träningen pågår i regel under en timme per gång
          och standarduppsättningen är en tränare och 4-6 elever. Varje elev
          tränar en eller flera tillfällen per vecka enligt önskemål. Schemat
          läggs med avsikt att så långt det går skapa jämna grupper efter ålder
          och spelerfarenhet.
        </p>

        <h2>Allmänna bestämmelser för tennisskolan</h2>
        <p>
          Tennisskolan består av två terminer, en hösttermin som pågår
          september-december och en vårtermin som pågår januari-maj. I maj
          fortsätter vårterminen för de som vill i ytterligare 3 veckor utomhus.
          Ingen nyanmälan görs inför varje termin, anmälan till tennisskolan
          fortsätter löpande ända tills uppsägning sker. OBS! Detta måste ske
          skriftligen! Undantag för detta är träningen som förlänger vårterminen
          med 3 veckor (se ovan), anmälan till dessa veckor sker på separat
          lapp.
        </p>
        <p>
          Uppsägning av platsen för vårterminen i tennisskolan skall alltid
          göras skriftligen senast sista december och för höstterminen senast
          sista juni. Har platsen inte sagts upp förutsätts att träningen
          fortsätter även under påföljande termin.
        </p>

        <h2>Privatträning</h2>
        <p>
          Privatträning är öppen för både nybörjare och mer vana spelare av
          varierande åldrar.
        </p>
        <p>
          Att då och då anlita en privattränare kan göra mycket för att rätta
          till teknikfel och nöta in det där slaget som du har svårt med.
        </p>
      </div>
      <div className="htk3-tennisskola_container-image_container">
        <div className="htk3-tennisskola_container-image_container-back_container">
          <ArrowLeft
            size={30}
            className="htk3-tennisskola_container-image_container-back"
            onClick={() => htk3.setLink("Hem")}
          />
          <p>Tillbaka till startsida</p>
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Tennisskola;
