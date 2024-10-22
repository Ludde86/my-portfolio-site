import React from "react";
import "./energi1Section2.css";

const Energi1section2 = () => {
  return (
    <div className="energi1section2">
      <div className="energi1section2-content">
        <div
          className="energi1section2-content-image"
          id="energi1section2-content-1"
        >
          <div className="energi1section2-content-text">
            <h1>Våra tjänster - Vindkraft</h1>
            <div className="energi1section-content-text-underline"></div>
            <p>
              Vindkraft är en av de mest effektiva och hållbara energikällorna,
              som utnyttjar vindens naturliga kraft för att generera ren,
              förnybar energi. På EcoPower Nordic är vi stolta över våra
              avancerade vindturbiner, som är designade för att maximera
              effektiviteten och minimera påverkan på miljön. Våra turbiner är
              utrustade med den senaste teknologin, vilket gör att de kan
              producera mer energi även vid låga vindhastigheter.
            </p>

            <button>Installation och Priser</button>
          </div>

          <div className="energi1section2-content-text-small">
            <h1>För en hållbar framtid</h1>
            <ul>
              <li>Effektivitet</li>
              <li>Hållbarhet</li>
              <li>Miljövänlighet</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="energi1section2-content">
        <div
          className="energi1section2-content-image"
          id="energi1section2-content-2"
        >
          <div className="energi1section2-content-text">
            <h1>Våra tjänster - Solkraft</h1>
            <div className="energi1section-content-text-underline"></div>
            <p>
              Solen är vår mest tillförlitliga och obegränsade energikälla, och
              solkraft erbjuder en ren, förnybar lösning för att möta dagens och
              framtidens energibehov. Våra solpaneler är byggda med den senaste
              tekniken för att maximera energiproduktionen, även under molniga
              dagar eller i områden med svagare solstrålning.
            </p>

            <button>Installation och Priser</button>
          </div>

          <div className="energi1section2-content-text-small">
            <h1>Energi direkt från solen</h1>
            <ul>
              <li>Tillgänglighet</li>
              <li>Kostnadseffektivitet</li>
              <li>Miljövänlighet</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energi1section2;
