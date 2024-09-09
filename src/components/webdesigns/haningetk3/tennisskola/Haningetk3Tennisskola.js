import React from "react";
import "./haningetk3tennisskola.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";
import Haningetk3Footer from "../footer/Haningetk3Footer";

const Haningetk3Tennisskola = () => {
  return (
    <>
      <div className="htk3-tennisskola_container">
        <Haningetk3Navbar />

        <div className="htk3-welcome_container-section_container">
          <div className="htk3-welcome_container-title_container">
            <div>
              <h2 id="page-title">Tennisskolan</h2>
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
                  Anmäl dig
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
              per gång. Varje elev tränar en eller flera tillfällen per vecka
              enligt önskemål. Schemat läggs med avsikt att så långt det går
              skapa jämna grupper efter ålder och spelerfarenhet.
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Åldrar</h1>
            <p>
              <strong>3-6 år Bollskola</strong>
            </p>
            <p>
              Här lägger vi fokus på bollvana, racketvana, motorik och
              koordinationsträning. De är här vi introducerar barnen till
              tennisen genom enkla lekar och övningar. Här använder vi
              skumgummibollar och röda tennisbollar.
            </p>
            <p>
              <strong>6-9 år Minitennis</strong>
            </p>
            <p>
              Nu spelar man bara med Röda bollar och fokus i träningen är
              motorik, koordination och slagteknik i olika lekformer. Vi
              anpassar banan och övningar efter spelarens spelnivå.
            </p>

            <p>
              <strong>7+ Orange</strong>
            </p>
            <p>
              Orange bollnivå och vi tränar nu på lite större banyta. Vi
              fördjupar oss ännu mer i slagteknik, taktik och rörelsemönster.
            </p>

            <p>
              <strong>9-18år Tennisskola</strong>
            </p>
            <p>
              Tennisträningen anpassad till olika nivå och ålder. Grön bollnivå.
              Vi läger djupare fokus på teknik, taktik & spelarens
              rörelseförmåga. Den mentala och fysiska delen tar nu också större
              utrymme av träningen. Tränaren är den som nu efter utveckling
              bestämmer när du som spelare är redo för den gula och sista
              bollen.
            </p>

            <h1>Prislista</h1>
            <p>Terminsavgift gäller från HT 2019.</p>
            <p>
              <strong>Bollskola/Minitennis (15 tillfällen)</strong>
            </p>
            <p>
              3-9 åringar, max 12 spelare på bana. I avgiften ingår ett racket.
              Grundkursen är 2 terminer, höst/vår.
            </p>
            <p>1300kr per/termin.</p>
            <p>
              <strong>Tennisskola (15 tillfällen)</strong>
            </p>
            <p>1 träningstimme/vecka 1725kr</p>
            <p>2 träningstimmar/vecka 2975kr</p>
            <p>3 träningstimmar/vecka 3795kr</p>
            <p>4 träningstimmar/vecka 4475kr</p>
            <p>5 träningstimmar/vecka 5125kr</p>
            <p>6 träningstimmar/vecka 5875kr</p>
            <p>
              <strong>
                Vill du som vuxen börja spela hos oss erbjuder vi gruppträning
                eller om du hellre vill träna privat men någon av våra tränare.
              </strong>
            </p>
            <p>
              <strong>Vuxengrupp (15 tillfällen)</strong>
            </p>
            <p>Träningstid antal personer/grupp</p>
            <p>3-4 personer 2295kr/1h 2995kr/1,5h 3695kr/2h</p>
            <p>2 personer 3295kr/1h</p>
            <p>1 personer 6495kr/1h</p>
            <p>
              <strong>
                Bollar, tränare och omklädningsrum med duschar ingår i priset.
              </strong>
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Privatträning</h1>
            <p>
              Privatträning är öppen för både nybörjare och mer vana spelare av
              varierande åldrar.
            </p>
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

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Tränarna</h1>
            <p>
              <strong>
                Ludvig Ekelund - Huvudansvarig för all träningsverksamhet -
                ludvigekelundhtk@gmail.com 076-164 42 14
              </strong>
            </p>
            <p>
              <strong>
                Nenad Markovic - Ungdom och vuxenträning -
                nenad.markovic@skandiamaklarna.se 073-734 40 60
              </strong>
            </p>
            <p>
              <strong>
                Philip B Paluchiewicz - Undom och vuxenträning -
                paluchiewicz@gmail.com 076-255 45 21
              </strong>
            </p>

            <p>
              <strong>Dante - Boll/minitennis och Tennisskola</strong>
            </p>
            <p>
              <strong>Charlie/Scott - Hjälptränare</strong>
            </p>
            <p>
              <strong>Slobodan Antic - Vuxenträning - 070-293 78 73</strong>
            </p>
            <p>
              <strong>Gabriel Gliori - Vuxenträning - 073-096 07 25</strong>
            </p>
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
        </div>
      </div>
      <Haningetk3Footer />
    </>
  );
};

export default Haningetk3Tennisskola;
