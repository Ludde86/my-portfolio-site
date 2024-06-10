import React from "react";

import "./js3Slider.css";

const Js3Slider = ({ color, img, desc, author }) => {
  //   console.log(color);
  return (
    <div className="js3-container-slider" style={{ background: color }}>
      <img src={img} alt={img} loading="lazy" />
      <h3>{desc}</h3>
      <p>{author}</p>
    </div>
  );
};

export default Js3Slider;
