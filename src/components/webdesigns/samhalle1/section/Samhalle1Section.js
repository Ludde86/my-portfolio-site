import React from "react";
import "./samhalle1Section.css";
import img1 from "../../assets/images/samhalle-7.jpg";

const Samhalle1Section = () => {
  return (
    <div className="samhalle1Section">
      <div className="samhalle1Section-first">
        <h3>Skogsvik kommun</h3>
        <h1>Aktuellt</h1>
        <p>
          Barnfamiljer uppskattar de säkra lekområdena och fritidsaktiviteter
          som simhall och sporthall, medan vuxna kan ta del av trevliga
          vandringsleder, cykelvägar och sociala mötesplatser.
        </p>
        <img src={img1} alt="img1" />
      </div>
      <div className="samhalle1Section-text">
        <ul>
          <li className="samhalle1Section-text-li">
            <h1>1</h1>
            <p>
              Äventyrsplatsen – På den nybyggda lekplatsen finns ett spännande
              klättertorn med rutschkanor.
            </p>
          </li>
          <li className="samhalle1Section-text-li">
            <h1>2</h1>
            <p>
              Skogsgläntans Stig – Upptäck de vackra skogsstigarna och njut av
              naturens lugn.
            </p>
          </li>
          <li className="samhalle1Section-text-li">
            <h1>3</h1>
            <p>
              Gläntans Kafé – Ett mysigt kafé beläget mitt i parken där besökare
              kan njuta av nybryggt kaffe, hembakade bakverk och smörgåsar.
            </p>
          </li>
          <li className="samhalle1Section-text-li">
            <h1>4</h1>
            <p>
              Skogsdoppet Simhall – En modern simhall där besökare kan ta ett
              uppfriskande dopp, träna i motionsbassängen eller njuta av
              relaxavdelningen.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Samhalle1Section;
