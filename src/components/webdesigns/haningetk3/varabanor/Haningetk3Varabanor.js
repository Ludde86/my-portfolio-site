import React from "react";
import "./haningetk3Varabanor.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";
import Haningetk3Footer from "../footer/Haningetk3Footer";

const Haningetk3Varabanor = () => {
  return (
    <>
      <div className="htk3-tavling_container">
        <Haningetk3Navbar />

        <div className="htk3-welcome_container-section_container">
          <div className="htk3-welcome_container-title_container">
            <div>
              <h2 id="page-title">Våra banor</h2>
            </div>

            <p>
              Haninge TK är en ideell tennisklubb belägen intill Torvalla
              idrottsanläggning. Vi har två nymålade banor med Plexipave
              beläggning. Dessutom har vi två grusbanor vid Sågen i Vendelsö.
            </p>

            <div className="htk3-welcome_container-title_container-button_container">
              <a
                href="https://www.matchi.se/forms/Jt3uUWLmTZWytQ0IJe0r"
                target="_blank"
                rel="noreferrer"
              >
                <button>Medlemskap</button>
              </a>
              <a
                href="https://www.matchi.se/facilities/haningetk"
                target="_blank"
                rel="noreferrer"
              >
                <button id="htk3-welcome_container-title_container-button_container-service-button">
                  Boka bana
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="htk3-tennisskola_container-info_container">
        <div className="htk3-tennisskola_container-desc_container">
          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Spela hos oss!</h1>
            <p>
              Av våra ungefär 400 medlemmar är lite mer hälften Juniorer som
              spelar i vår mycket populära tennisskola, vi erbjuder även
              vuxenkurser samt gruppspel för dem som gillar att spela matcher.
              Medlemmar spelar till väldigt förmånliga priser så passa på att
              teckna ett medlemsskap redan idag!
            </p>
            <p>
              Hallen är bemannad dagligen mellan 15.30-19.30 på vardagar. Övriga
              tider kommer man in med kod som erhålls i samband med bokning av
              bana.
            </p>
            <p>Välkomna att boka!</p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Våra banor</h1>
            <p>
              <strong>Innomhus - Torvalla</strong>
            </p>
            <p>2 banor hardcourt</p>
            <p>
              <strong>Utomhus - Sågen, Haningevallen</strong>
            </p>
            <p>2 banor grus</p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Prislista</h1>
            <p>
              <strong>10-klippet: </strong> 10 speltimmar på valfri tid
              Medlemspris: 1700kr
            </p>
            <p>
              <strong>10-Klippet B-tider:</strong> Vardagar 07.30-09.30,
              21.30-23.30. Fredagar 13.30-16.30 Helger 07.30-08.30 Lördagar
              17.30-19.30 Söndagar 21.30-22.30 Medlemspris: 1100kr
            </p>
            <p>
              <strong>10-klippet C-tider:</strong> 10 speltimmar på giltigt
              följande tider: * Vardagar 06:30 - 15:30 * Helger 06:30 - 07:30 *
              Lördagar 19:30 - 23:30 * Söndagar 22:30 - 23:30 Medlemspris: 900kr
            </p>
            <p>
              <strong>Senior 65+ klippet:</strong> Klippkortet gäller 10
              speltimmar, med följande begränsningar: * endast vardagar innan
              15:30 Medlemspris: 800kr
            </p>
          </div>
        </div>
      </div>
      <Haningetk3Footer />
    </>
  );
};

export default Haningetk3Varabanor;
