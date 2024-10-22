import React from "react";
import "./energi1Section.css";
import kraft1 from "../../assets/images/vind-4.jpg";
import kraft2 from "../../assets/images/sol-3.jpg";
import kraft3 from "../../assets/images/rok-1.jpg";

const Energi1section = () => {
  const screenWidth = window.matchMedia("( max-width: 560px )").matches;

  return (
    <div className="energi1section">
      <div className="energi1section-content">
        <div className="energi1section-content-text">
          <h1>Vi driver framtidens vindkraft</h1>
          <div className="energi1section-content-text-underline"></div>
          <p>
            Vi är specialister på att omvandla vindens kraft till ren, förnybar
            energi. Genom att placera vindkraftverk i strategiska områden
            maximerar vi effektiviteten och minimerar vårt klimatavtryck. Vi
            strävar efter att leverera pålitlig och hållbar el till både
            privatpersoner och företag, och bidra till en global
            energiomställning som skyddar vår planet.
          </p>
          <h3>
            Att driva en hållbar framtid genom vindkraft och förse samhället med
            förnybar energi, så vi tillsammans kan minska beroendet av fossila
            bränslen och bygga en grönare värld.
          </h3>
        </div>
        <div className="energi1section-content-image">
          <img src={kraft1} alt="kraft1" />
        </div>
      </div>

      {screenWidth ? (
        <div className="energi1section-content">
          <div className="energi1section-content-text">
            <h1>Vi omvandlar solens energi till en hållbar framtid</h1>
            <div className="energi1section-content-text-underline"></div>
            <p>
              Vi är dedikerade till att utnyttja solens kraft för att leverera
              ren, förnybar energi. Genom våra solkraftverk skapar vi effektiva
              och miljövänliga energilösningar som minskar koldioxidutsläppen
              och skyddar vår planet. Vårt mål är att göra solenergi tillgänglig
              för alla, från hushåll till stora företag, och samtidigt bidra
              till en mer hållbar energiförsörjning.
            </p>
            <h3>
              Att tillhandahålla förnybar energi från solkraft, minska beroendet
              av fossila bränslen och bygga ett mer hållbart samhälle för
              kommande generationer.
            </h3>
          </div>
          <div className="energi1section-content-image">
            <img src={kraft2} alt="kraft2" />
          </div>
        </div>
      ) : (
        <div className="energi1section-content-reversed">
          <div className="energi1section-content-image">
            <img src={kraft2} alt="kraft2" />
          </div>
          <div className="energi1section-content-text-reversed">
            <h1>Vi omvandlar solens energi till en hållbar framtid</h1>
            <div className="energi1section-content-text-underline"></div>
            <p>
              Vi är dedikerade till att utnyttja solens kraft för att leverera
              ren, förnybar energi. Genom våra solkraftverk skapar vi effektiva
              och miljövänliga energilösningar som minskar koldioxidutsläppen
              och skyddar vår planet. Vårt mål är att göra solenergi tillgänglig
              för alla, från hushåll till stora företag, och samtidigt bidra
              till en mer hållbar energiförsörjning.
            </p>
            <h3>
              Att tillhandahålla förnybar energi från solkraft, minska beroendet
              av fossila bränslen och bygga ett mer hållbart samhälle för
              kommande generationer.
            </h3>
          </div>
        </div>
      )}

      <div className="energi1section-content">
        <div className="energi1section-content-text">
          <h1>Vi leder omställningen bort från fossila bränslen</h1>
          <div className="energi1section-content-text-underline"></div>
          <p>
            Vi är fast beslutna att minska världens beroende av fossila
            bränslen. Genom våra lösningar inom förnybar energi, såsom sol- och
            vindkraft, erbjuder vi effektiva alternativ som drastiskt minskar
            utsläppen av växthusgaser. Vårt mål är att bidra till en grönare
            framtid där ren energi är normen, inte undantaget.
          </p>
          <h3>
            Att minska användningen av fossila bränslen genom att leverera
            pålitlig och förnybar energi, vilket bidrar till att skydda klimatet
            och skapa en hållbar framtid för alla.
          </h3>
        </div>
        <div className="energi1section-content-image">
          <img src={kraft3} alt="house" />
        </div>
      </div>
    </div>
  );
};

export default Energi1section;
