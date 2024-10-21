import React from "react";
import "./bygg2Section.css";
import bygg1 from "../../assets/images/bygg-3.jpg";
import bygg2 from "../../assets/images/bygg-1.jpg";
import bygg3 from "../../assets/images/bygg-4.jpg";

const Bygg2section = () => {
  return (
    <div className="bygg2section">
      <div className="bygg2section-content">
        <div className="bygg2section-content-image">
          <img src={bygg1} alt="house" />
        </div>
        <div
          className="bygg2section-content-text"
          id="byggRenoveringApp2-content-darker"
        >
          <h1>Skräddarsydda Lösningar</h1>
          <div className="bygg2section-content-text-underline"></div>
          <p>
            Vi är experter på att lyssna på våra kunders behov och skapa unika
            lösningar som passar deras visioner och önskemål. Varje projekt är
            anpassat för att överträffa förväntningarna.
          </p>
        </div>
      </div>

      <div className="bygg2section-content">
        <div className="bygg2section-content-image">
          <img src={bygg2} alt="house" />
        </div>
        <div
          className="bygg2section-content-text"
          id="byggRenoveringApp2-content-darker"
        >
          <h1>Effektiv Projektledning</h1>
          <div className="bygg2section-content-text-underline"></div>
          <p>
            Vår starka projektledning säkerställer att alla byggfaser går
            smidigt, med noggrann planering och tidskontroll. Vi levererar i
            tid, utan att kompromissa med kvaliteten.
          </p>
        </div>
      </div>

      <div className="bygg2section-content">
        <div className="bygg2section-content-image">
          <img src={bygg3} alt="house" />
        </div>
        <div
          className="bygg2section-content-text"
          id="byggRenoveringApp2-content-darker"
        >
          <h1>Detaljprecision</h1>
          <div className="bygg2section-content-text-underline"></div>
          <p>
            Vi är kända för vår noggrannhet i varje liten detalj, från
            grundläggning till slutlig finish. Perfektion och hög standard i
            varje del av arbetet är vårt kännetecken.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bygg2section;
