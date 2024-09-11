import React from "react";
import "./aboutHtk3.css";

import aboutImg from "../assets/img/utveckling-2.jpg";

const AboutHtk3 = () => {
  return (
    <div className="htk3-about_container">
      <div className="htk3-about_container-content">
        <div className="htk3-about_container-content-text">
          <p>
            I föreningen arbetar vi alla aktivt med vår vision och våra
            värdegrunder. Tennis är för alla, engagemang, glädje, Gemenskap och
            Utveckling förenar oss. Vi bedriver träningsgrupper för, Mini
            Tennis, barn och ungdomar och vuxna. Eller om de är privatträning
            som du eftersöker.
          </p>
          <p>
            Mål HTK ska bedriva breddtennis med Haninge kommun som huvudsakligt
            upptagningsområde. Verksamheten ska i huvudsak omfatta:
          </p>
          <ul className="htk3-about_container-content-text-ul">
            <li>Träning</li>
            <li>Kontrakt- och strötidsspel</li>
            <li>Gruppspel</li>
            <li>Tävlingar</li>
            <li>Trivselaktiviteter</li>
          </ul>
        </div>
        <div className="htk3-about_container-content-image">
          <img src={aboutImg} alt="about-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutHtk3;
