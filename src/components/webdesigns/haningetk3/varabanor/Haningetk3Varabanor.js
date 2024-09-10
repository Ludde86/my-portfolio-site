import React from "react";
import "./haningetk3Varabanor.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";
import Haningetk3Footer from "../footer/Haningetk3Footer";
import bana1 from "../assets/img/varbana-1.jpg";
import bana2 from "../assets/img/varbana-2.jpg";
import bana3 from "../assets/img/utebana-1.jpg";

const Haningetk3Varabanor = () => {
  return (
    <>
      <div className="htk3-varabanor_container">
        <Haningetk3Navbar />

        <div className="htk3-varabanor_container-section_container">
          <div className="htk3-varabanor_container-title_container">
            <div>
              <h2>Våra banor</h2>
            </div>

            <p>
              Haninge TK är en ideell tennisklubb belägen intill Torvalla
              idrottsanläggning. Vi har två nymålade banor med Plexipave
              beläggning. Dessutom har vi två grusbanor vid Sågen i Vendelsö.
            </p>

            <div className="htk3-welcome_container-button_container">
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
                <button id="htk3-welcome_container-service-button">
                  Boka bana
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="htk3-varabanor_container-info_container">
        <div className="htk3-varabanor_container-desc_container">
          <div className="htk3-varabanor_container-desc_container-desc">
            <h1>Våra banor</h1>
            <p>
              Haninge Tennis Klubben är ägare av två tennisbanor som ligger
              belägna i en hall på Torvalla IP och klubben har också två
              utomhusbanor av grus i Haningevallen, belägna i sågen området.
            </p>
            <p>Våra två inomhus banorna är gjorda i Latex-Ite beläggning.</p>
            <p>
              I hallen har du som spelare också tillgång till omklädningsrum,
              toalett och dusch.
            </p>
          </div>

          <div className="htk3-varabanor_container-desc_container-img">
            <img src={bana1} alt="bana1"></img>
            <img src={bana2} alt="bana2"></img>
          </div>

          <div className="htk3-varabanor_container-desc_container-desc">
            <h1>Priser för spel på inomhusbanorna</h1>
            <p>
              Kontrakts och strötider är uppdelade i tre kategorier, A-, B- och
              C-tider.
            </p>
            <p>
              Kategorierna är prissatta enligt nedan. Nya priserna på strötider
              gäller från 2015-03-01 tillsvidare.
            </p>
            <p>
              <strong>10-klippet A-tider: </strong> 10 speltimmar på valfri tid
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
          <div className="htk3-varabanor_container-desc_container-desc">
            <h1>Våra utomhusbanor</h1>
            <p>
              Våra två utomhusbanor är gjorda av grus - Säsong Maj till
              September.
            </p>
            <p>
              Vid våra utebanor finns ingen tillgång till omklädningsrum,
              toalett eller dusch.
            </p>
            <p>Dricksvatten finns att tillgå.</p>
          </div>
          <div className="htk3-varabanor_container-desc_container-img">
            <img src={bana3} alt="bana3"></img>
            <img src={bana3} alt="bana3"></img>
          </div>
          <div className="htk3-varabanor_container-desc_container-desc">
            <h1>Priser för spel på utomhusbanorna</h1>
            <p>Priser kommer</p>
          </div>
        </div>
      </div>
      <Haningetk3Footer />
    </>
  );
};

export default Haningetk3Varabanor;
