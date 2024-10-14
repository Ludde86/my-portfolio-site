import React from "react";
import "./bygg1Section.css";
import img1 from "../../assets/images/house-1.jpg";
import { Check } from "lucide-react";

const Bygg1Section = () => {
  return (
    <div className="bygg1section">
      <div className="bygg1section-text">
        <h1>ProVakt Säkerhet – Din trygghet, vårt fokus</h1>
        <p>
          Hos ProVakt Säkerhet ser vi till att du och din verksamhet alltid är i
          trygga händer. Med vår expertis och moderna säkerhetslösningar
          anpassade efter dina specifika behov, är vi din pålitliga partner för
          allt från övervakning och larm till personlig säkerhet. Vi finns där
          för dig – när och var du behöver oss, för din trygghet är vår största
          prioritet.
        </p>
        <h3>Varför välja oss?</h3>
        <ul>
          <li>
            <Check className="bygg1section-text-icon" />
            Skräddarsydda säkerhetslösningar – Vi anpassar våra tjänster helt
            efter dina unika behov.
          </li>
          <li>
            <Check className="bygg1section-text-icon" />
            Erfarna säkerhetsexperter – Vårt team består av pålitliga experter
            med många års erfarenhet.
          </li>
          <li>
            <Check className="bygg1section-text-icon" />
            24/7 tillgänglighet – Vi är alltid redo att skydda dig och din
            verksamhet, dygnet runt.
          </li>
        </ul>
        <button>Boka</button>
      </div>
      <div className="bygg1section-image">
        <img src={img1} alt="house" />
      </div>
    </div>
  );
};

export default Bygg1Section;
