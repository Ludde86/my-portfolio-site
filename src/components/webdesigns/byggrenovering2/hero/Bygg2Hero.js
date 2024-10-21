import React from "react";
import "./bygg2Hero.css";
import { Hammer, Paintbrush, Shovel } from "lucide-react";

const Bygg2hero = () => {
  return (
    <div className="bygg2hero">
      <div className="bygg2hero-text">
        <h1>Bygg & Vision – där din vision blir verklighet</h1>
        <p>
          Med vårt fokus på kvalitet, noggrannhet och innovation bygger vi inte
          bara hus, utan framtiden. Vi förstår vikten av varje projekt, stort
          som litet, och lägger alltid ner omsorg i varje detalj.
        </p>
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
      <div className="bygg2hero-cards">
        <div className="bygg2hero-card">
          <Shovel className="bygg2hero-icon" size={40} />
          <h1>Grunden</h1>
          <div className="bygg2hero-card-underline"></div>
          <p>Bygg din vision från en stark grund.</p>
        </div>

        <div className="bygg2hero-card">
          <Hammer className="bygg2hero-icon" size={40} />
          <h1>Strukturen</h1>
          <div className="bygg2hero-card-underline"></div>
          <p>Vi formar din framtid med precision.</p>
        </div>

        <div className="bygg2hero-card">
          <Paintbrush className="bygg2hero-icon" size={40} />
          <h1>Finishen</h1>
          <div className="bygg2hero-card-underline"></div>
          <p>Detaljer som fulländar din vision.</p>
        </div>
      </div>
    </div>
  );
};

export default Bygg2hero;
