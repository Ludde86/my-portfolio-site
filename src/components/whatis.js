import React from "react";
import "./whatis.css";
import javascriptLogo from "../img/java-script-icon.jpg";
import htmlLogo from "../img/html-icon.jpg";
import cssLogo from "../img/css-icon.png";
import reactLogo from "../img/react-icon.png";

const Whatis = () => {
  return (
    <div className="whatis-container">
      <div className="whatis-container-content">
        <div className="whatis-container-content-text">
          <h1 id="goto-javascript">Vad är JavaScript?</h1>
          <p>
            JavaScript är ett programmeringsspråk som används för att göra
            webbsidor interaktiva. När du besöker en webbsida kan JavaScript
            användas för att skapa funktioner som t.ex. popup-meddelanden,
            knappar som ändrar färg när du klickar på dem, eller menyer som
            fälls ut när du för musen över dem. Det hjälper till att ge liv åt
            webbsidor och göra dem mer användarvänliga.
          </p>
          <p>
            JavaScript körs direkt i din webbläsare, vilket gör att webbsidor
            kan reagera snabbt utan att behöva ladda om hela sidan. Det är ett
            av de mest populära språken på internet och används tillsammans med
            HTML (som skapar sidans struktur) och CSS (som ger sidan dess
            utseende).
          </p>
          <p>
            Med JavaScript kan utvecklare skapa allt från små animationer på en
            webbsida till mer avancerade funktioner som interaktiva kartor,
            chattbottar och spel.
          </p>
        </div>
        <img src={javascriptLogo} alt="javascript-logo" />
      </div>

      <div className="whatis-container-content">
        <div className="whatis-container-content-text">
          <h1 id="goto-html">Vad är HTML?</h1>
          <p>
            HTML (HyperText Markup Language) är ett språk som används för att
            skapa strukturen och innehållet på en webbsida. Det fungerar som
            "skelettet" på sidan och bestämmer vad som ska visas, som texter,
            bilder, länkar, och knappar.
          </p>
          <p>
            $
            {`HTML använder taggar för att definiera olika element på sidan. Till
        exempel används <h1>
        -taggen för en rubrik, <p> för ett stycke text, och <img> för att
        visa en bild. Varje element är omslutet av dessa taggar som berättar för
        webbläsaren hur innehållet ska struktureras.`}
          </p>
          <p>
            HTML är grunden för alla webbsidor och fungerar tillsammans med CSS
            (som ger design och stil) och JavaScript (som ger interaktivitet).
            Utan HTML skulle det inte finnas någon struktur för webbsidorna vi
            använder varje dag.
          </p>
        </div>
        <img src={htmlLogo} alt="html-logo" id="whatis-reversed" />
      </div>

      <div className="whatis-container-content">
        <div className="whatis-container-content-text">
          <h1 id="goto-css">Vad är CSS?</h1>
          <p>
            CSS (Cascading Style Sheets) är ett språk som används för att styla
            och designa webbsidor. Om HTML är sidans "skelett", kan man säga att
            CSS är dess "kläder" – det bestämmer hur olika element på sidan ska
            se ut, som färger, typsnitt, layout och storlek.
          </p>
          <p>
            Med CSS kan utvecklare förändra utseendet på en hel webbsida eller
            specifika delar av den. Till exempel kan du använda CSS för att
            ändra färgen på en rubrik, lägga till bakgrundsbilder, eller styra
            hur element placeras på sidan, som att sätta en meny längst upp och
            text längst ned.
          </p>
          <p>
            CSS gör det också enkelt att anpassa samma design på många sidor
            samtidigt. Du kan ha en extern CSS-fil som kopplas till flera
            webbsidor, så om du ändrar något i den filen uppdateras designen
            överallt.
          </p>
          <p>
            Tillsammans med HTML (som ger strukturen) och JavaScript (som ger
            interaktivitet) skapar CSS det visuella och estetiska utseendet på
            en webbsida.
          </p>
        </div>
        <img src={cssLogo} alt="css-logo" />
      </div>

      <div className="whatis-container-content">
        <div className="whatis-container-content-text">
          <h1 id="goto-react">Vad är ReactJs?</h1>
          <p>
            ReactJS är ett JavaScript-bibliotek som används för att bygga
            användargränssnitt (UI) på webbsidor, särskilt när sidorna är stora
            och komplexa. Det gör det enklare för utvecklare att skapa
            interaktiva och dynamiska webbapplikationer där innehållet kan
            uppdateras utan att ladda om hela sidan.
          </p>
          <p>
            En av Reacts viktigaste funktioner är användningen av komponenter.
            Komponenter är som små, återanvändbara delar av koden som hanterar
            specifika delar av gränssnittet, till exempel en knapp, en meny
            eller en hel sektion av en sida. Genom att bygga webbsidor med
            komponenter blir det lättare att underhålla och uppdatera dem.
          </p>
          <p>
            React använder också något som kallas en "virtuell DOM" (Document
            Object Model), vilket gör att det snabbt kan uppdatera bara de delar
            av sidan som förändras, istället för att ladda om hela sidan. Detta
            gör att React-applikationer kan kännas snabbare och mer responsiva.
          </p>
          <p>
            ReactJS är populärt för att skapa allt från små funktioner till hela
            webbappar, som sociala nätverk och e-handelsplattformar. Det används
            ofta tillsammans med andra verktyg och bibliotek, men dess
            huvudsakliga syfte är att hantera hur användargränssnittet ser ut
            och fungerar.
          </p>
        </div>
        <img src={reactLogo} alt="react-logo" id="whatis-reversed" />
      </div>
    </div>
  );
};

export default Whatis;
