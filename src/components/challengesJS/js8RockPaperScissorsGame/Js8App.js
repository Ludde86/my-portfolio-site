import React, { useState } from "react";
import "./js8App.css";
import {
  LiaHandRockSolid,
  LiaHandScissorsSolid,
  LiaHandPaperSolid,
} from "react-icons/lia";

/*
In this project, we create a rock, paper, and scissors game. The computer will also choose a random option, and the results will be displayed. You can win, lose, or tie. Scores are tracked at the bottom. We'll use HTML for structure, CSS for a modern look, and JavaScript to generate the computer's choice and compare the results. This game is an interactive way to test your luck and strategy against a computer opponent.
*/

// ikoner/knappar för användarens val
// generera ett val av datorn
// jämnför respektives val
// visa och spara resultatet

const Js8App = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [comPoints, setComPoints] = useState(0);
  const [userSelected, setUserSelected] = useState("");
  const [comSelected, setComSelected] = useState("");
  const [textRestult, setTextRestult] = useState("");

  const gameChoices = ["ROCK", "SCISSORS", "PAPER"];

  const handleUserSelected = (selected, com) => {
    console.log("clicked");
    console.log("selected: ", selected);
    console.log("com: ", com);

    setUserSelected(selected);
    setComSelected(com);

    if (selected === "ROCK") {
      if (com === "ROCK") {
        setTextRestult("LIKA!");
      }
      if (com === "SCISSORS") {
        setUserPoints((userPoints) => userPoints + 1);
        setTextRestult("Du vann! Sten slår sax.");
      }
      if (com === "PAPER") {
        setTextRestult("Du förlorade. Påse slår sten.");
        setComPoints((comPoints) => comPoints + 1);
      }
    }

    if (selected === "SCISSORS") {
      if (com === "SCISSORS") {
        setTextRestult("LIKA!");
      }
      if (com === "PAPER") {
        setTextRestult("Du vann! Sax slår påse.");
        setUserPoints((userPoints) => userPoints + 1);
      }
      if (com === "ROCK") {
        setTextRestult("Du förlorade. Sten slår sax.");
        setComPoints((comPoints) => comPoints + 1);
      }
    }

    if (selected === "PAPER") {
      if (com === "PAPER") {
        setTextRestult("LIKA!");
      }
      if (com === "ROCK") {
        setTextRestult("Du vann! Påse slår sten.");
        setUserPoints((userPoints) => userPoints + 1);
      }
      if (com === "SCISSORS") {
        setTextRestult("Du förlorade. Sax slår påse.");
        setComPoints((comPoints) => comPoints + 1);
      }
    }
  };

  return (
    <div className="js8_container">
      <h1>#8 - Rock Paper Scissors</h1>
      <div className="js8_container-game_container">
        <h3>Välj ditt drag:</h3>
        <div className="js8_container-game_container-icons">
          <div
            className="js8_container-game_container-icons-icon"
            id="js8_container-game_container-icons-icon-stone"
            onClick={() =>
              handleUserSelected(
                "ROCK",
                gameChoices[Math.floor(Math.random() * gameChoices.length)]
              )
            }
          >
            <LiaHandRockSolid />
          </div>
          <div
            className="js8_container-game_container-icons-icon"
            id="js8_container-game_container-icons-icon-scissors"
            onClick={() =>
              handleUserSelected(
                "SCISSORS",
                gameChoices[Math.floor(Math.random() * gameChoices.length)]
              )
            }
          >
            <LiaHandScissorsSolid />
          </div>
          <div
            className="js8_container-game_container-icons-icon"
            id="js8_container-game_container-icons-icon-paper"
            onClick={() =>
              handleUserSelected(
                "PAPER",
                gameChoices[Math.floor(Math.random() * gameChoices.length)]
              )
            }
          >
            <LiaHandPaperSolid />
          </div>
        </div>

        {textRestult && (
          <div className="js8_container-game_container-choice_text_container">
            <div className="js8_container-game_container-choice_text_container-text">
              <p>
                *Du valde: {userSelected}, Datorn valde: {comSelected}
              </p>
            </div>
          </div>
        )}

        <h3>{textRestult && textRestult}</h3>
        <div className="js8_container-game_container-choice_text_container-text-points">
          <h3>
            Dina poäng:{" "}
            <span className="js8_container-game_container-choice_text_container-text-blue">
              {userPoints}
            </span>
          </h3>
          <h3>
            Datorns poäng:{" "}
            <span className="js8_container-game_container-choice_text_container-text-red">
              {comPoints}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Js8App;
