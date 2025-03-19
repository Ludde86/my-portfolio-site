import React from "react";
import "./challenge1.css";

const Challenge1 = () => {
  return (
    <div className="challenge_container">
      <div className="container__title">
        <h1>CSS #1</h1>
        <p>
          Menyikon: Används på nästan alla webbplatser, en enkel men imponerande
          animering som fångar användarens intresse
        </p>
      </div>

      <div className="challenge__container">
        <div className="challenge">
          <div className="bar-container">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge1;
