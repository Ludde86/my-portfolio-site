import React, { useState } from "react";
import "./jsApp.css";

/*
Let's create a weight converter project that converts pounds to kilograms. The webpage features an input field where users can enter a weight in pounds, and the webpage automatically displays the equivalent weight in kilograms. After 10 seconds, the result is removed, and the input field is emptied using the 'set time out' method. We've also incorporated an error handling feature to handle negative input numbers. If the user enters a negative number, the webpage displays an error message, "Please enter a valid number." We'll learn how to handle error situations and remove the error message after two seconds using an event listener for the input field. The event listener will call a function that performs the desired actions.
*/

// Input field där användaren skriver in vikt i pounds
// Vid fel inmatning (vid minus) ska ett felmeddelande visas i 2sekunder
// Funktion som räknar ut och konverterar till kilo (kg) och som sedan skriver ut uträkningen
// Uträkningen ska visas i 10sekunder

const Js10App = () => {
  const [kilogram, setKilogram] = useState(null);

  const handleSetKilogram = (value) => {
    setKilogram(value * 0.45359237);
    setTimeout(() => {
      setKilogram(null);
    }, 5000);

    if (typeof kilogram !== "number" && kilogram > 0) {
      setTimeout(() => {
        setKilogram(null);
      }, 2000);
    }
  };

  return (
    <div className="js10_container">
      <div className="js10_container-converter">
        <h1>Viktomvandling</h1>
        <div className="js10_container-converter-input_container">
          <label>Pounds:</label>
          <input
            type="number"
            placeholder={kilogram ? kilogram : "Skriv vikt"}
            onChange={(e) => handleSetKilogram(e.target.value)}
          />
        </div>
        <p>
          Vikt i Kilogram: {kilogram > 0 && Math.round(kilogram * 100) / 100}
        </p>

        <p id="js10-error">{kilogram < 0 && "Ange ett riktigt värde"}</p>
      </div>
    </div>
  );
};

export default Js10App;
