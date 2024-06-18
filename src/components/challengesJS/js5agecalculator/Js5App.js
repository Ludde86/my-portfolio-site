import React, { useState } from "react";
import "./js5App.css";

/*
In this project, we are going to create an age calculator. As you can see from the final version of the project, we have a container here with the title age calculator with an input of a date. If we click on the date input, we can choose the date of our birthday. For example, if we choose a date in in 2022 and if we click now on Calculate Age, you can see the age is calculated based on this date and saying your age is 21 years old.
*/

const Js5App = () => {
  const [birth, setBirth] = useState(null);
  const [age, setAge] = useState(null);

  // get users birth year - CHECK
  const handleSetBirth = (value) => {
    setBirth(value);
  };

  // compare year now and set age - CHECK
  let yearNow = new Date().getFullYear();

  const submit = () => {
    if (birth) {
      setAge(yearNow - birth.getFullYear());
    }
  };

  return (
    <div className="app5_container">
      <div className="app5_container-age_calc_container">
        <h1>Räkna ut din ålder</h1>
        <h3>Skriv in ditt födelsedatum</h3>
        <input
          type="date"
          onChange={(e) => handleSetBirth(e.target.valueAsDate)}
        />
        <button onClick={submit}>Räkna ut din ålder</button>
        <h2>
          Du är {age != null ? age : "_"} år{" "}
          {age != null ? (age > 18 ? "gammal" : "ung") : ""}
        </h2>
      </div>
    </div>
  );
};

export default Js5App;
