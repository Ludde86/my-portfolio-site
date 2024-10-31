import React from "react";
import "./samhalle2Section.css";
import img1 from "../../assets/images/samhalle-7.jpg";

const Samhalle2Section = () => {
  return (
    <div className="samhalle2Section">
      <div className="samhalle2Section-first">
        <div className="samhalle2Section-first-text">
          <h3>Skogsvik kommun</h3>
          <h1>Upptäck lugnet, bo i Skogsvik</h1>
          <p>
            Skogsvik är ett idealiskt hem för både barnfamiljer och äldre, tack
            vare sina välskötta lekplatser, charmiga caféer och ett utbud av
            aktiviteter som passar alla åldrar.
          </p>
          <button>Läs mer</button>
        </div>
      </div>
      <div className="samhalle2Section-second"></div>
    </div>
  );
};

export default Samhalle2Section;
