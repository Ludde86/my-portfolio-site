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

  return (
    <div className="js8_container">
      <div className="js8_container-game_container">
        <h3>Välj ditt drag:</h3>
        <div className="js8_container-game_container-icons">
          <div
            className="js8_container-game_container-icons-icon"
            id="js8_container-game_container-icons-icon-stone"
          >
            <LiaHandRockSolid />
          </div>
          <div
            className="js8_container-game_container-icons-icon"
            id="js8_container-game_container-icons-icon-scissors"
          >
            <LiaHandScissorsSolid />
          </div>
          <div
            className="js8_container-game_container-icons-icon"
            id="js8_container-game_container-icons-icon-paper"
          >
            <LiaHandPaperSolid />
          </div>
        </div>
        <h3>Dina poäng: {userPoints}</h3>
        <h3>Datorns poäng: {comPoints}</h3>
      </div>
    </div>
  );
};

export default Js8App;
