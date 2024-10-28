import React from "react";
import "./aboutme.css";

const About = () => {
  return (
    <div className="about-me">
      <div className="about-me-content" id="about-me-content-1">
        <h1>Fråga: Vad erbjuder du?</h1>
        <h3>
          Svar: Jag erbjuder moderna och lättnavigerade hemsidor som är
          anpassade efter dina behov och förväntningar.
        </h3>
      </div>

      <div className="about-me-content" id="about-me-content-2">
        <h1>Fråga: Hur lång tid tar det att utveckla en hemsida?</h1>
        <h3>Svar: Jag levererar en färdig hemsida inom två veckor.</h3>
      </div>

      <div className="about-me-content" id="about-me-content-3">
        <h1>Fråga: Vad kostar en hemsida?</h1>
        <h3>
          Svar: För en hemsida med ett fåtal sidor är standardpriset 5000 kr.
        </h3>
      </div>

      <div className="about-me-content" id="about-me-content-4">
        <h1>
          Fråga: Kan du hjälpa mig om min nuvarande hemsida känns trött och
          utdaterad?
        </h1>
        <h3>
          Svar: Absolut! Om din hemsida känns föråldrad kan jag hjälpa dig att
          modernisera den och ge den ett fräscht och professionellt lyft.
        </h3>
      </div>

      <div className="about-me-content" id="about-me-content-5">
        <h1>Fråga: Vad är din designfilosofi?</h1>
        <h3>
          Svar: Jag fokuserar på att skapa moderna hemsidor som är lätta att
          navigera och har en ren, enkel design för en bättre
          användarupplevelse.
        </h3>
      </div>
    </div>
  );
};

export default About;
