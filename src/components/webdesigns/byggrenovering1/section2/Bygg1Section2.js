import React from "react";
import "./bygg1Section2.css";

const Bygg1Section2 = () => {
  const screenWidth = window.matchMedia("( max-width: 560px )").matches;

  return (
    <div className="bygg1section2">
      <h1>Våra produkter och tjänster</h1>
      <div className="bygg1section2-content">
        <div
          className="bygg1section2-content-image"
          id="bygg1section2-content-1"
        ></div>
        <div className="bygg1section2-content-text">
          <h1>Kameraövervakning</h1>
          <p>
            Med ProVakt Säkerhets kameraövervakning får du en trygg och effektiv
            lösning för att skydda din verksamhet och egendom. Våra moderna
            övervakningssystem ger dig ständig kontroll, oavsett var du befinner
            dig, och fungerar både avskräckande och bevisförande vid eventuella
            incidenter. Med våra kameror och smidiga systemlösningar hjälper vi
            dig att skapa en säkrare miljö för både anställda och kunder. Lita
            på oss för att hålla koll på det som betyder mest för dig.
          </p>

          <button>Priser</button>
        </div>
      </div>
      {screenWidth ? (
        <div className="bygg1section2-content">
          <div
            className="bygg1section2-content-image"
            id="bygg1section2-content-2"
          ></div>
          <div className="bygg1section2-content-text">
            <h1>Med direktlarm</h1>
            <p>
              Med ProVakt Säkerhets kameraövervakning får du inte bara full
              kontroll, utan även ett system som reagerar blixtsnabbt. Vid
              misstänkt aktivitet skickas ett omedelbart larm direkt till våra
              operatörer, som snabbt kan vidta åtgärder och säkerställa att rätt
              hjälp når fram. Detta ger dig tryggheten att veta att varje
              situation hanteras snabbt och effektivt, oavsett tid på dygnet.
              Med oss vid din sida är din säkerhet alltid under uppsikt.
            </p>

            <button>Priser</button>
          </div>
        </div>
      ) : (
        <div className="bygg1section2-content">
          <div className="bygg1section2-content-text">
            <h1>Med direktlarm</h1>
            <p>
              Med ProVakt Säkerhets kameraövervakning får du inte bara full
              kontroll, utan även ett system som reagerar blixtsnabbt. Vid
              misstänkt aktivitet skickas ett omedelbart larm direkt till våra
              operatörer, som snabbt kan vidta åtgärder och säkerställa att rätt
              hjälp når fram. Detta ger dig tryggheten att veta att varje
              situation hanteras snabbt och effektivt, oavsett tid på dygnet.
              Med oss vid din sida är din säkerhet alltid under uppsikt.
            </p>

            <button>Priser</button>
          </div>
          <div
            className="bygg1section2-content-image"
            id="bygg1section2-content-2"
          ></div>
        </div>
      )}

      <div className="bygg1section2-content">
        <div
          className="bygg1section2-content-image"
          id="bygg1section2-content-3"
        ></div>
        <div className="bygg1section2-content-text">
          <h1>Trygghet dygnet runt</h1>
          <p>
            Med ProVakt Säkerhets kameraövervakning kan du känna dig trygg hela
            tiden. Vid minsta tecken på misstänkt aktivitet skickas ett larm
            direkt till våra operatörer, som snabbt agerar för att skydda dig
            och din verksamhet. Detta ger dig den extra tryggheten att veta att
            vi alltid håller uppsikt och är redo att ingripa om det behövs – dag
            som natt.
          </p>

          <button>Priser</button>
        </div>
      </div>
    </div>
  );
};

export default Bygg1Section2;
