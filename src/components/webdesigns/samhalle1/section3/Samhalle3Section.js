import React from "react";
import "./samhalle3Section.css";

const Samhalle3Section = () => {
  return (
    <div className="samhalle3Section">
      <div className="samhalle3Section-text">
        <h3>Skogsvik kommun</h3>
        <h1>En plats där naturen & tryggheten möts</h1>
        <p>
          Under sommarhalvåret finns det badplatser och picknickområden vid
          sjön, och vintertid erbjuds skridskobana och skidspår. Skogsvik är
          helt enkelt en plats där naturen och tryggheten möts, vilket gör att
          många trivs och vill stanna.
        </p>
      </div>
      <div className="samhalle3Section-content">
        <div
          className="samhalle3Section-content-item"
          id="samhalle3Section-content-item-id-1"
        >
          <div className="samhalle3Section-content-item-text">
            <h1>Trygghet</h1>
            <p>
              Skogsvik är en kommun där tryggheten står i centrum. Här bidrar
              ett engagerat samhälle till en trygg och välkomnande miljö för
              alla invånare.
            </p>
          </div>
        </div>

        <div
          className="samhalle3Section-content-item"
          id="samhalle3Section-content-item-id-2"
        >
          <div className="samhalle3Section-content-item-text">
            <h1>Natur</h1>
            <p>
              Naturen är aldrig långt borta i Skogsvik. Området är rikt på skog,
              sjöar och parker som inbjuder till stilla stunder och inspirerande
              utflykter.
            </p>
          </div>
        </div>

        <div
          className="samhalle3Section-content-item"
          id="samhalle3Section-content-item-id-3"
        >
          <div className="samhalle3Section-content-item-text">
            <h1>Friluftsliv</h1>
            <p>
              Oavsett om du vill vandra längs Skogsgläntans Stig, ta en simtur i
              Skogsdoppet, eller ha picknick vid sjön – Skogsvik erbjuder
              friluftsaktiviteter för alla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samhalle3Section;
