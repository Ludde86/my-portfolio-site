import React from "react";
import "./energi1Section2.css";

const Energi1section2 = () => {
  const screenWidth = window.matchMedia("( max-width: 560px )").matches;

  return (
    <div className="energi1section2">
      <h1>Våra produkter och tjänster:</h1>
      <div className="energi1section2-content">
        <div
          className="energi1section2-content-image"
          id="energi1section2-content-1"
        ></div>
        <div
          className="energi1section2-content-text"
          id="byggRenoveringApp2-content-darker"
        >
          <h1>Renovering & Ombyggnation</h1>
          <div className="bygg2section-content-text-underline"></div>
          <p>
            Vi på ByggVision är specialister på renovering och ombyggnationer,
            och oavsett om du vill modernisera ditt hem eller skapa något helt
            nytt från en befintlig byggnad kan vi hjälpa dig. Våra
            renoveringstjänster omfattar allt från kök och badrum till
            helhetslösningar för hela bostaden. Vi arbetar nära våra kunder för
            att förstå deras vision och behov, och ser till att varje steg
            utförs med högsta kvalitet och omsorg. Med vår expertis och
            noggranna planering kan vi hantera både små och stora
            ombyggnationer, från att öppna upp planlösningar till att förvandla
            källare och vindar till funktionella utrymmen. Genom att använda
            moderna metoder och kvalitativa material ser vi till att ditt hem
            inte bara ser fantastiskt ut, utan även håller för framtiden.
          </p>

          <button>Priser</button>
        </div>
      </div>
      {screenWidth ? (
        <div className="energi1section2-content">
          <div
            className="energi1section2-content-image"
            id="energi1section2-content-2"
          ></div>
          <div
            className="energi1section2-content-text"
            id="byggRenoveringApp2-content-darker"
          >
            <h1>Markarbete & Grundläggning</h1>
            <div className="bygg2section-content-text-underline"></div>
            <p>
              En stabil grund är avgörande för varje byggprojekt, och ByggVision
              erbjuder professionella tjänster inom markarbete och grundläggning
              för både nybyggnationer och tillbyggnader. Vi har den expertis och
              utrustning som krävs för att hantera allt från schaktning och
              dränering till grundsättning och stabilisering av marken. Våra
              markarbeten säkerställer att byggplatsen är förberedd enligt alla
              säkerhets- och kvalitetsstandarder, vilket skapar en stabil grund
              att bygga vidare på. Vi anpassar våra tjänster efter de specifika
              förutsättningarna på varje plats och samarbetar med kunden för att
              säkerställa att allt från tidplan till budget följs noggrant. Med
              vårt fokus på precision och kvalitet får ditt projekt den bästa
              möjliga starten.
            </p>

            <button>Priser</button>
          </div>
        </div>
      ) : (
        <div className="energi1section2-content">
          <div
            className="energi1section2-content-text"
            id="byggRenoveringApp2-content-darker"
          >
            <h1>Markarbete & Grundläggning</h1>
            <div className="bygg2section-content-text-underline"></div>
            <p>
              En stabil grund är avgörande för varje byggprojekt, och ByggVision
              erbjuder professionella tjänster inom markarbete och grundläggning
              för både nybyggnationer och tillbyggnader. Vi har den expertis och
              utrustning som krävs för att hantera allt från schaktning och
              dränering till grundsättning och stabilisering av marken. Våra
              markarbeten säkerställer att byggplatsen är förberedd enligt alla
              säkerhets- och kvalitetsstandarder, vilket skapar en stabil grund
              att bygga vidare på. Vi anpassar våra tjänster efter de specifika
              förutsättningarna på varje plats och samarbetar med kunden för att
              säkerställa att allt från tidplan till budget följs noggrant. Med
              vårt fokus på precision och kvalitet får ditt projekt den bästa
              möjliga starten.
            </p>

            <button>Priser</button>
          </div>
          <div
            className="energi1section2-content-image"
            id="energi1section2-content-2"
          ></div>
        </div>
      )}

      <div className="energi1section2-content">
        <div
          className="energi1section2-content-image"
          id="energi1section2-content-3"
        ></div>
        <div
          className="energi1section2-content-text"
          id="byggRenoveringApp2-content-darker"
        >
          <h1>Takläggning & Takrenovering</h1>
          <div className="bygg2section-content-text-underline"></div>
          <p>
            Takets skick är avgörande för hela byggnadens hållbarhet och
            energieffektivitet, och ByggVision erbjuder takläggning och
            takrenovering för både nya och äldre fastigheter. Våra takläggare
            har lång erfarenhet av att arbeta med olika typer av material, såsom
            tegel, plåt, och papp, vilket gör att vi kan erbjuda anpassade
            lösningar beroende på din byggnads behov och estetik. Vid
            takrenoveringar inspekterar vi noggrant takets skick och tar fram en
            lösning som säkrar både långsiktig hållbarhet och skydd mot väder
            och vind. Vare sig det handlar om en fullständig takomläggning eller
            reparation av skador, ser vi till att arbetet utförs effektivt och
            med hög kvalitet för att ge ditt tak nytt liv och långvarig
            funktion.
          </p>

          <button>Priser</button>
        </div>
      </div>

      {screenWidth ? (
        <div className="energi1section2-content">
          <div
            className="energi1section2-content-image"
            id="energi1section2-content-4"
          ></div>
          <div
            className="energi1section2-content-text"
            id="byggRenoveringApp2-content-darker"
          >
            <h1>Fasadrenovering & Målning</h1>
            <div className="bygg2section-content-text-underline"></div>
            <p>
              Ett vackert och slitstarkt golv är en central del av varje hem
              eller fastighet, och ByggVision erbjuder professionella tjänster
              inom både golvläggning och golvslipning. Vi arbetar med alla typer
              av golv – från parkett och trägolv till klinker och vinyl – och
              hjälper dig att välja rätt material för just ditt utrymme och
              behov. Vid golvslipning återställer vi gamla och slitna trägolv
              till sitt ursprungliga skick eller ger dem ett helt nytt utseende
              genom slipning och ytbehandling. Oavsett om det gäller att lägga
              nytt golv i ett nybyggt hem eller att ge nytt liv åt ett äldre
              golv ser vi till att arbetet utförs med precision och noggrannhet,
              för att ge dina golv den hållbarhet och estetik som du önskar.
            </p>

            <button>Priser</button>
          </div>
        </div>
      ) : (
        <div className="energi1section2-content">
          <div
            className="energi1section2-content-text"
            id="byggRenoveringApp2-content-darker"
          >
            <h1>Fasadrenovering & Målning</h1>
            <div className="bygg2section-content-text-underline"></div>
            <p>
              Ett vackert och slitstarkt golv är en central del av varje hem
              eller fastighet, och ByggVision erbjuder professionella tjänster
              inom både golvläggning och golvslipning. Vi arbetar med alla typer
              av golv – från parkett och trägolv till klinker och vinyl – och
              hjälper dig att välja rätt material för just ditt utrymme och
              behov. Vid golvslipning återställer vi gamla och slitna trägolv
              till sitt ursprungliga skick eller ger dem ett helt nytt utseende
              genom slipning och ytbehandling. Oavsett om det gäller att lägga
              nytt golv i ett nybyggt hem eller att ge nytt liv åt ett äldre
              golv ser vi till att arbetet utförs med precision och noggrannhet,
              för att ge dina golv den hållbarhet och estetik som du önskar.
            </p>

            <button>Priser</button>
          </div>
          <div
            className="energi1section2-content-image"
            id="energi1section2-content-4"
          ></div>
        </div>
      )}
    </div>
  );
};

export default Energi1section2;
