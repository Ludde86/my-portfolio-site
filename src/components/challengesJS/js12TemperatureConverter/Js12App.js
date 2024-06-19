import React, { useState } from "react";
import "./js12App.css";

/*
This project aims to create a temperature converter. The final version of the project includes three inputs for Celsius, Fahrenheit, and Kelvin temperature formats. When you change any of these inputs, for example, if you choose 100 degrees Celsius, you will see the equivalent Celsius value in Fahrenheit and Kelvin formats. Additionally, if you change one input, you will see a real-time change inside the other inputs. For instance, changing the Fahrenheit input to 100 degrees will show you that it is equal to 37 degrees Celsius and 311 Kelvin. To create this project, we will learn how to use an "onchange" event listener to track changes inside the inputs. We will also use the switch statement to track changes based on the name of the input we are working on. Additionally, we will use CSS to give the project a modern look, inspired by newMorphISM design. In summary, this project will help us learn how to create a temperature converter using JavaScript and CSS, and we will learn how to track changes using event listeners and switch statements.
*/

// 3 fält för varej temperatur
// Funktion för varje temperatur där ska de andra temperaturer omvandlas och skrivs ut
// Switch statement ska hålla redo på vilket värde vi ändrar

const Js12App = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  const handleTempInput = (value, temp) => {
    switch (temp) {
      case "celsius":
        handleCelsius(value);
        break;
      case "fahrenheit":
        handleFahrenheit(value);
        break;
      case "kelvin":
        handleKelvin(value);
        break;
      default:
        break;
    }
  };

  const handleCelsius = (value) => {
    setCelsius(value);
    setFahrenheit((value * 9) / 5 + 32);

    setKelvin(value * 1 + 273.15);

    if (!value || value === 0) {
      handleDefault();
    }
  };
  const handleFahrenheit = (value) => {
    setFahrenheit(value);
    setCelsius(((value - 32) * 5) / 9);
    setKelvin(((value - 32) * 5) / 9 + 273.15);
    if (!value) {
      handleDefault();
    }
  };
  const handleKelvin = (value) => {
    setKelvin(value);
    setCelsius(value - 273.15);
    setFahrenheit(((value - 273.15) * 9) / 5 + 32);
    if (!value) {
      handleDefault();
    }
  };

  const handleDefault = () => {
    setCelsius(0);
    setFahrenheit(0);
    setKelvin(0);
  };

  return (
    <div className="js12_app">
      <div className="js12_app-converter">
        <h1>Omvandla Temperatur</h1>
        <div className="js12_app-converter-input_container">
          <label>Celcuis:</label>
          <input
            type="number"
            placeholder="Ange Temperatur"
            value={celsius ? Math.round(celsius * 100) / 100 : ""}
            onChange={(e) => handleTempInput(e.target.value, "celsius")}
          />
          <span>°C</span>
        </div>
        <div className="js12_app-converter-input_container">
          <label>Fahrenheit:</label>
          <input
            type="number"
            placeholder="Ange Temperatur"
            value={fahrenheit ? Math.round(fahrenheit * 100) / 100 : ""}
            onChange={(e) => handleTempInput(e.target.value, "fahrenheit")}
          />
          <span>°F</span>
        </div>
        <div className="js12_app-converter-input_container">
          <label>Kelvin:</label>
          <input
            type="number"
            placeholder="Ange Temperatur"
            value={kelvin ? Math.round(kelvin * 100) / 100 : ""}
            onChange={(e) => handleTempInput(e.target.value, "kelvin")}
          />
          <span>K</span>
        </div>
      </div>
    </div>
  );
};

export default Js12App;
