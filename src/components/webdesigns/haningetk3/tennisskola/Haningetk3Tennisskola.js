import React from "react";
import "./haningetk3tennisskola.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";

const Haningetk3Tennisskola = () => {
  return (
    <>
      <div className="htk3-tennisskola_container">
        <Haningetk3Navbar />

        <div className="htk3-welcome_container-section_container">
          <div className="htk3-welcome_container-title_container">
            <div>
              <h2>Tennisskolan</h2>
            </div>

            <p>
              Tennisskolan är öppen för både nybörjare och mer vana spelare av
              varierande åldrar - allt från minitennis till vuxengrupper.
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
                href="https://www.matchi.se/forms/9g6MT0BuznTHBMOqbJDq"
                target="_blank"
                rel="noreferrer"
              >
                <button id="htk3-welcome_container-title_container-button_container-service-button">
                  hösttermin 2024
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="htk3-tennisskola_container-info_container">
        <div className="htk3-tennisskola_container-desc_container">
          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Tennisskolan</h1>
            <p>
              Tennisskolan löper terminsvis och pågår alla dagar i veckan, dock
              med uppehåll för skollov. Träningen pågår i regel under en timme
              per gång och standarduppsättningen är en tränare och 4-6 elever.
              Varje elev tränar en eller flera tillfällen per vecka enligt
              önskemål. Schemat läggs med avsikt att så långt det går skapa
              jämna grupper efter ålder och spelerfarenhet. För att anmäla dig
              till tennisskolan eller vuxentennis, klicka då här!
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Prislista</h1>
            <p>
              Terminsavgifter för tennisskolan för juniorer omfattar ca 15
              tillfällen, gäller från HT 2019.
            </p>
            <p>
              <strong>Tennisskola</strong>
            </p>
            <p>1 träningstimme/vecka 1725kr</p>
            <p>2 träningstimmar/vecka 2975kr</p>
            <p>3 träningstimmar/vecka 3795kr</p>
            <p>4 träningstimmar/vecka 4475kr</p>
            <p>5 träningstimmar/vecka 5125kr</p>
            <p>6 träningstimmar/vecka 5875kr</p>
            <p>
              <strong>Vuxengrupp (15 tillfällen)</strong>
            </p>
            <p>Träningstid antal personer/grupp</p>
            <p>3-4 personer 2295kr/1h 2995kr/1,5h 3695kr/2h</p>
            <p>2 personer 3295kr/1h</p>
            <p>1 personer 6495kr/1h</p>
            <p>
              <strong>Minitennis (15 tillfällen)</strong>
            </p>
            <p>
              <i>Grundkurs</i>
            </p>
            <p>
              3-5 åringar, max 12 spelare på bana, 1300kr per/termin. I avgiften
              ingår inför hösten ett racket och inför våren en ryggsäck. Båda
              från Babolat. I grundkursen är målet att barnen under lekande
              former ska lära sig den grundläggande slagtekniken. Grundkursen är
              2 terminer, höst/vår.
            </p>
            <p>
              T-skolans höst- och vårtermin omfattar c a 15 veckor vardera
              (bollar, tränare och omklädningsrum med duschar ingår i priset)
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Tränarna</h1>
            <p>
              Nenad Markovic nenad.markovic@skandiamaklarna.se 073-734 40 60
            </p>
            <p>Slobodan Antic 070-293 78 73</p>
            <p>Gabriel Gliori 073-096 07 25</p>
            <p>Ludvig Ekelund ludvigekelundhtk@gmail.com 076-164 42 14</p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Ungdomssektion</h1>
            <p>Philip B Paluchiewicz paluchiewicz@gmail.com 076-255 45 21</p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Allmänna bestämmelser för tennisskolan</h1>
            <p>
              <strong>Haninge Tennisklubb</strong>
            </p>
            <p>Rev 2013-06-14</p>
            <p>
              Haninge Tennisklubb består av minitennis, tennisskola och
              vuxentennis.
            </p>
            <p>
              Tennisskolan består av två terminer, en hösttermin som pågår
              september-december och en vårtermin som pågår januari-maj. I maj
              fortsätter vårterminen för de som vill i ytterligare 3 veckor
              utomhus. Ingen nyanmälan görs inför varje termin,{" "}
              <strong>
                anmälan till tennisskolan fortsätter löpande ända tills
                uppsägning sker. OBS! Detta måste ske skriftligen!
              </strong>{" "}
              Undantag för detta är träningen som förlänger vårterminen med 3
              veckor (se ovan), anmälan till dessa veckor sker på separat lapp.
            </p>
            <p>
              Uppsägning av platsen för vårterminen i tennisskolan skall alltid
              göras skriftligen senast sista december och för höstterminen{" "}
              <strong>senast</strong> sista juni. Har platsen inte sagts upp
              förutsätts att träningen fortsätter även under påföljande termin.
            </p>
            <p>
              Sker uppsägningen efter sista december för vårterminen respektive
              efter sista juni för höstterminen har planeringen för respektive
              termin redan påbörjats. Klubben tar då ut en administrativ{" "}
              <strong>avgift på 250 kr</strong> för omplacering av grupper och
              tränartimmar.{" "}
              <strong>
                Har terminen påbörjats och pågått i mer än två veckor utgår full
                avgift. Detta är helt utan undantag.
              </strong>
            </p>
            <p>
              <strong>
                Om man blir borta en längre tid kan man få kompensation i form
                av att hoppa in i passande grupp i slutet av terminen. Detta
                sker dock endast i mån av plats.
              </strong>
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Privatträning</h1>
            <p>
              Privatträning är öppen för både nybörjare och mer vana spelare av
              varierande åldrar.
            </p>
            <p>Tränare som ger privattimmar i HTK.</p>
            <p>
              Att då och då anlita en privattränare kan göra mycket för att
              rätta till teknikfel och nöta in det där slaget som du har svårt
              med.
            </p>
            <p>Ta kontakt med respektive tränare för att boka en tid.</p>
            <p>
              <strong>Nenad Markovic nenad@haningetk.se 073-734 40 60</strong>
            </p>
            <p>
              <strong>
                Ludvig Ekelund ludvigekelundhtk@gmail.com 076-164 42 14
              </strong>
            </p>
          </div>
          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Videoanalys</h1>
            <p>
              Förbättra tekniken på dina slag! HTK erbjuder videoanalys av
              individuell spelare: förbättra tekniken och få en grundlig
              genomgång av dina slag som kommer hjälpa dig till att bli ännu
              bättre tennisspelare.
            </p>
            <p>
              Avgift: 1000 kr, ingår; videoutrustning, banhyra, bollar,
              redigering av video, teori, förslag till förbättrningar och tips
              att tänka på framöver. Om detta känns intressant kontakta Nenad
              för mer information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Haningetk3Tennisskola;
