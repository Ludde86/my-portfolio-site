import React from "react";
import "./landing.css";
import logo from "../assets/Hedström & Taube Stämpel_RGB[1382].png";
import { BiDownArrowAlt } from "react-icons/bi";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-image"></div>
      <div className="landing__content">
        <h1>Vi älskar byggprojekt.</h1>
        <p>
          Byggprojekt är vår passion och vårt hjärta klappar för varje idé som
          förverkligas.
        </p>
        <div className="landing__content-button">
          <input type="mail" placeholder="Ange e-mail" />
          <button>Kontakta oss</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
