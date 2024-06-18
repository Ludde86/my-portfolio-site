import React from "react";
import "./js1grid.css";

const Js1Grid = ({ handleCellClick }) => {
  const grid = [...Array(100)];

  return (
    <div className="js1-grid_container">
      <h3>Pixel Art Generator</h3>
      <div className="js1-grid">
        {grid.map((_, index) => (
          <div
            key={index}
            className="js1-grid_container-cell_container"
            onClick={() => handleCellClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Js1Grid;
