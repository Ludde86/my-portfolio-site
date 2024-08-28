import React from "react";
import "./haningetk3Tavling.css";
import Haningetk3Navbar from "../navbar/Haningetk3Navbar";
import logo from "../assets/img/logga-medium_nobg.png";

const Haningetk3Tavling = () => {
  return (
    <>
      <div className="htk3-tavling_container">
        <Haningetk3Navbar />

        <div className="htk3-welcome_container-section_container">
          <div className="htk3-welcome_container-title_container">
            <div>
              <h2>Tävling</h2>
            </div>

            <p>
              Att tävla i tennis är för många barn väldigt stimulerande,
              spännande och utmanande.
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
            <h1>Hur börjar man?</h1>
            <p>
              Att tävla i tennis är för många barn väldigt stimulerande,
              spännande och utmanande. En match utvecklar dessutom i regel en
              spelares tennis betydligt mer än en enskild träningstimme. Idag
              kan barn börja tävla redan vid 6 års ålder. Junior är man fram
              till man fyllt 18 år. Det finns ett stort utbud tävlingar för alla
              åldrar och kategorier.
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Klubbmästerskap</h1>
            <p>
              KM hålls årligen oftast i samband med höstlovet. Följande
              kategorier spelas: 1 Singel 2 Juniorsingel (ålders/nivåindelat
              poolspel) 3 Dubbel 4 Motionssingel (för dig som vill komma igång
              och spela matcher) Alla matcher spelas i bäst av 3 set med super
              tiebreak i avgörande set. Vid lågt deltagarantal kan klasser
              strykas Alla som anmäler sig måste vara medlemmar i Haninge TK.
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Skinkdubbeln</h1>
            <p>
              En rolig aktivitet för hela familjen och medlemmar som hålls
              årligen innan julen. För dem som inte är bekanta med vad
              skinkdubbeln så kan vi berätta att det är en dubbeltävling i
              vilken vinnarna får varsin julskinka. Anmälningslista kommer att
              finnas på anslagstavlan i hallen cirka 2-3 veckor innan
              höstterminens avslut. Alla matcher spelas i bäst av 3 tiebreaks
              såkallade ”sprint” matcher. Heldag med många matcher i hallen men
              kom gärna lite tidigare Alla medlemmar är välkomna att anmäla sig.
              Man kan välja att anmäla sig som lag eller som ensam deltagare då
              paras man ihop med någon på plats. Juniorer spelar en separat
              turnering Första pris är varsin julskinka.
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Lovcuper</h1>
            <p>
              Klubben arrangerar aktiviter under loven där juniorer- och
              minitenniselever får prova på matchspel i enklare form. Tävlingars
              ändamål är att försöka få barnen att få mer vana i en matchmiljö
              än enbart bara enskilda träningstimmar.
            </p>
          </div>

          <div className="htk3-tennisskola_container-desc_container-desc">
            <h1>Gruppspel</h1>
            <p>
              Alla kan vara med, från nybörjare till elitnivå! Du sätts in i den
              grupp du passar, beroende på din egen spelnivå. Matcherna brukar
              bli i snitt 1 gång/vecka med spel på kvällstid i veckorna alt.
              dagtid på helgen. Priset ligger mellan 600-800 kr per omgång. I
              priserna ingår cirka 6-8 matcher och 1 bollrör. För mer info,
              vänligen kontakta Slobodan eller gå in gruppspels hemsidan och gör
              en intresseanmälan: BackhandSmash - HTK Välkomna!
              Gruppspelsansvarig.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Haningetk3Tavling;
