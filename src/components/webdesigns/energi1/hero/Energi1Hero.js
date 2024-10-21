import React from "react";
import "./energi1Hero.css";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Energi1Hero = () => {
  return (
    <div className="energi1hero">
      <div className="energi1hero-text">
        <h1>EcoPower Nordic – naturens kraft för en grönare framtid</h1>
        <div className="energi1hero-text-button">
          <p>
            Vi på EcoPower Nordic erbjuder förnybar energi från både vind och
            sol. Genom hållbara lösningar bidrar vi till en renare planet och
            säkerställer att framtida generationer har tillgång till kraft från
            naturens egna resurser. Låt oss tillsammans skapa en ljusare,
            grönare framtid med energi som varar.
          </p>
          <button>Kontakta oss</button>
        </div>
        {/*
        <p>
          På Bygg&Vision är vi mer än bara en byggfirma – vi är din partner i
          att förverkliga drömmar. Med vårt fokus på kvalitet, noggrannhet och
          innovation bygger vi inte bara hus, utan framtiden. Vi förstår vikten
          av varje projekt, stort som litet, och lägger alltid ner omsorg i
          varje detalj.
        </p>
          */}
      </div>
      <div className="energi1hero-cards">
        <div className="energi1hero-card">
          <Facebook className="energi1hero-icon" size={40} />
        </div>

        <div className="energi1hero-card">
          <Instagram className="energi1hero-icon" size={40} />
        </div>

        <div className="energi1hero-card">
          <Twitter className="energi1hero-icon" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Energi1Hero;
