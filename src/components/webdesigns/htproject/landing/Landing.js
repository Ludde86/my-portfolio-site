import React from "react";
import "./landing.css";
import logo from "../assets/Hedström & Taube Stämpel_RGB[1382].png";
import { BiDownArrowAlt } from "react-icons/bi";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-image"></div>
      <div className="landing__content"></div>

      <div className="landing__content-buttons">
        <a
          className="project-button"
          style={{ background: "#ea7f04" }}
          href="#news"
        >
          <span>Nyheter</span>
          <div className="project-button_arrow">
            <BiDownArrowAlt size={26} color="#fff" />
          </div>
        </a>

        <a className="project-button" href="#about">
          <span>OM OSS</span>
          <div className="project-button_arrow">
            <BiDownArrowAlt size={26} color="#fff" />
          </div>
        </a>

        <a
          className="project-button"
          style={{ background: "#cf09ac" }}
          href="#projects"
        >
          <span>AKTUELLA</span>
          <span>PROJEKT</span>
          <div className="project-button_arrow">
            <BiDownArrowAlt size={26} color="#fff" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Landing;
