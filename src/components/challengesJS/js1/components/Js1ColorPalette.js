import React from "react";
import "./js1colorpalette.css";

const Js1ColorPalette = ({ handleColorClick }) => {
  return (
    <div className="js1-color_palette_container">
      <div
        className="js1-color"
        style={{
          backgroundColor: "white",
        }}
        onClick={() => handleColorClick("white")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "yellow",
        }}
        onClick={() => handleColorClick("yellow")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "orange",
        }}
        onClick={() => handleColorClick("orange")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "red",
        }}
        onClick={() => handleColorClick("red")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "lightblue",
        }}
        onClick={() => handleColorClick("lightblue")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "blue",
        }}
        onClick={() => handleColorClick("blue")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "lightgreen",
        }}
        onClick={() => handleColorClick("lightgreen")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "green",
        }}
        onClick={() => handleColorClick("green")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "pink",
        }}
        onClick={() => handleColorClick("pink")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "purple",
        }}
        onClick={() => handleColorClick("purple")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "brown",
        }}
        onClick={() => handleColorClick("brown")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "gray",
        }}
        onClick={() => handleColorClick("gray")}
      ></div>

      <div
        className="js1-color"
        style={{
          backgroundColor: "black",
        }}
        onClick={() => handleColorClick("black")}
      ></div>

      {/* Add more color options as needed */}
    </div>
  );
};

export default Js1ColorPalette;
