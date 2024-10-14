import React from "react";
import "./bygg1Hero.css";
import { Cctv, ShieldCheck, Siren } from "lucide-react";

const Bygg1Hero = () => {
  return (
    <div className="bygg1hero">
      <div className="bygg1hero-text">
        <h1>ProVakt Säkerhet – Din trygghet, vår prioritet</h1>
        <p>
          Hos ProVakt Säkerhet ser vi till att du och din verksamhet alltid är
          skyddade. Med erfarna säkerhetsexperter och moderna lösningar
          skräddarsyr vi våra tjänster för att möta just dina behov. Oavsett om
          det gäller övervakning, larm eller personlig säkerhet kan du lita på
          att vi finns där – när och var du behöver oss. Din trygghet är vår
          högsta prioritet.
        </p>
      </div>
      <div className="bygg1hero-actions">
        <div className="bygg1hero-action">
          <button>Läs mer</button>
        </div>
        <div className="bygg1hero-icons">
          <Cctv className="bygg1hero-icon" size={40} />
          <Siren className="bygg1hero-icon" size={40} />
          <ShieldCheck className="bygg1hero-icon" size={40} />
        </div>
      </div>

      <svg
        className="bygg1hero-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,192L60,170.7C120,149,240,107,360,96C480,85,600,107,720,144C840,181,960,235,1080,240C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Bygg1Hero;
