import React from "react";
import "./js1app.css";
import Js1Grid from "./components/Js1Grid";
import { useState } from "react";
import Js1ColorPalette from "./components/Js1ColorPalette";

const Js1 = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCellClick = (index) => {
    const cells = [
      ...document.getElementsByClassName("js1-grid_container-cell_container"),
    ];
    console.log("cells: ", cells);
    cells[index].style.backgroundColor = selectedColor;
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="js1-container">
      <Js1Grid handleCellClick={handleCellClick} />
      <Js1ColorPalette handleColorClick={handleColorClick} />
    </div>
  );
};

export default Js1;

/* Aktiverar klicka-och-håll för att fylla cellerna

  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (index) => {
    setIsMouseDown(true);
    handleCellClick(index); // Fyll den första cellen omedelbart
  };
  
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  
  const handleMouseEnter = (index) => {
    if (isMouseDown) {
      handleCellClick(index);
    }
  };

  */
