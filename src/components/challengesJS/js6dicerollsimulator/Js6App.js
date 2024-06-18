import React, { useEffect, useState } from "react";
import "./js6App.css";

// Welcome to the Dice Roll Simulator project. The final version of the project features a dice at the center of the screen and a "Roll dice" button. The button triggers an animation and generates a random number, which is displayed in the center of the dice when clicked, t. Additionally, the number is added to a history list. To achieve this, we used modern CSS to style the dice and added a JavaScript event listener to the button. The listener generates a random number, saves it to an array, and updates the history list.

const Js6App = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [rollList, setRollList] = useState([]);

  const dots = [...Array(randomNumber)];

  useEffect(() => {
    if (randomNumber) {
      setRollList([...rollList, randomNumber]);
    }
  }, [randomNumber]);

  // Tärning som visar slagen siffra
  // En lista på användarens slag
  // Tärningen ska visa en animation när användaren trycker på "Kasta tärningen"

  // Knapp som slumpar fram en siffra mellan 1 och 6
  const handleRandomNumber = () => {
    setRandomNumber(0);
    setAnimation(true);

    setTimeout(() => {
      setAnimation(false);
      setRandomNumber(Math.floor(Math.random() * 6 + 1));
    }, 1000);
  };

  return (
    <div className="js6_container">
      <h1>Rulla tärningen</h1>
      <div className="js6_container-dice_container">
        <div
          className={[
            "js6_container-dice_container-dice " +
              (animation && "animation-roll"),
          ]}
        >
          {dots.map((_, index) => (
            <div
              key={index}
              className="js6_container-dice_container-dice-dot"
            ></div>
          ))}
        </div>
        <button onClick={handleRandomNumber}>Kasta tärningen</button>
        <p>Kast: {randomNumber ? randomNumber : "?"}</p>
      </div>
      <div className="js6_container-rollist_container">
        {rollList.length > 0 &&
          rollList.map((item, index) => {
            return (
              <div key={index} className="js6_container-rollist_container-item">
                <p>Kast {index + 1}:</p>
                <p>{item}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Js6App;
