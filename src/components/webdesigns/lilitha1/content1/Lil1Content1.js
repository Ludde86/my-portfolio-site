import React from "react";
import "./lil1Content1.css";
import img1 from "../assets/lil-blue.jpeg";
import img2 from "../assets/lil-pink.jpeg";
import img3 from "../assets/lil-yellow.jpeg";

const Lil1Content1 = () => {
  return (
    <div id="content-1" className="grid-container lil1_content1_container">
      <div className="grid-item ">
        <img src={img1} alt="img1" className="lil1_content1_container-img" />
      </div>
      <div className="grid-item">
        <img src={img2} alt="img2" className="lil1_content1_container-img" />
      </div>
      <div className="grid-item">
        <img src={img3} alt="img3" className="lil1_content1_container-img" />
      </div>
      <div className="grid-item"></div>
    </div>
  );
};

export default Lil1Content1;
