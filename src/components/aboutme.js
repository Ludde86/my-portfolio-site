import React from "react";
import "./aboutme.css";

const About = () => {
  return (
    <div className="about-me">
      <p className="about-title" style={{ marginTop: 32 }}>
        Om mig:
      </p>

      <p className="about-text">
        Jag är 36år och tvåbarnsfar som bor tillsammans med min fru i Vendelsö,
        ca 2mil söder om Stockholm. Jag skulle beskriva mig själv som glad,
        driven och envis. Grottar ofta in mig i sådant som jag finner
        intressant.
      </p>

      <p className="about-text">
        Jag har nu programmerat i ca fyra år, mestadels i JavaScript och i dess
        bibliotek React/React Native. Jag lägger en hel del tid på att få
        applikationerna och webbsidorna levande med i princip enbart CSS, dels
        för att få en djupare inblick på hur saker jag skriver fungerar men även
        för att i detalj kunna få ett önskat resultat.
      </p>

      <p className="about-title">Vad jag gör just nu:</p>

      <p className="about-text">
        Jag utvecklar hemsidor, dels från grunden, men även genom att utveckla
        redan befintliga hemsidor från trötta till mer pigga och moderna sidor.
        Kika gärna min portfolio på fliken <strong>PROJEKT</strong> uppe till
        höger. Jag vill både bistå och utvecklas så söker ständigt kontakt för
        samarbeten.
      </p>

      <p className="about-title">Vad jag har gjort:</p>

      <p className="about-text">
        Jag har utvecklat en app åt Parkera.nu som är en webbaserad
        parkeringstjänst. Här har jag tillsammans med produktägaren hittat
        lösningar för att användarna enklare ska kunna bevaka och hantera sina
        uppgifter och parkeringstillstånd. Appen är hyffsat stor med flertalet
        API-anrop både till och från appen.
      </p>

      <p className="about-text">
        Jag har även utvecklat och drivit en del butiker inom e-handel. Jag kan
        från grunden bygga upp en nätbutik, skapa annonser, till att sälja
        produkter. I detta ingår att testa produkter, bygga upp
        hemsidor/butiker, hantera lager, ordrar och kundtjänst. Skapa annonser
        och hantera annonskontot via meta/facebook, följa statistik för att
        testa, optimera och utveckla annonserna.
      </p>

      <p className="about-text"></p>

      <p className="about-title">Utvecklingsmiljö:</p>

      <p className="about-text">
        Jag utvecklar i JavaScript-biblioteken React och React-native, designar
        i ren CSS.
      </p>

      <p className="about-text">
        Inom e-handel använder jag plattformen shopify och Business manager för
        meta/facebook.
      </p>

      <p className="about-title">Hur jag blev programmerare:</p>

      <p className="about-text">
        Min karriär som utvecklare startade 2017 då jag genomförde två
        distanskurser, Programmering Grund- och Fortsättningskurs i Java. Året
        därpå antog jag en tvåårig yh-utbildning som Javautvecklare på
        IT-Högskolan i Liljeholmen.
      </p>
      <p className="about-text">
        Vid sidan utav studierna ägnade jag mig åt JavaScript och React/React
        Native, där jag utvecklade både hemsidor och mobilapplikationer.
      </p>
      <p className="about-text">
        I mitt senaste projekt har jag konverterat en webbaserad
        parkeringstjänst (likt easypark) till en mobilapplikation i React
        Native. Webbtjänsten, som drivs av en egenföretagare, har aktiva kunder
        och är inriktad till företag/föreningar.
      </p>

      <p className="about-text">
        Tveka inte på att höra av dig om du har frågor eller funderingar.
      </p>

      <p className="greeting-text">Med vänliga hälsningar, Ludvig Björn</p>
    </div>
  );
};

export default About;
