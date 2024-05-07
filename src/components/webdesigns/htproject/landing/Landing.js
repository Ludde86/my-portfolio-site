import React from "react";
import "./landing.css";
import logo from "../assets/Hedström & Taube Stämpel_RGB[1382].png";
import { BiDownArrowAlt } from "react-icons/bi";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__content">
        {/*
			<div className="landing__about">
			<p>
			<span className="landing__title">Hedström & Taube</span> erbjuder alla typer av projektledning
			inom bygg och anläggning, oavsett vilken typ av entreprenad ni valt. Det är grunden, men inte
			vad som gör oss unika. Det som särskiljer oss är vår passion.
			</p>
			<p>
			För oss är varje nybyggnation eller renovering en spännande utmaning som vi vill vara med och
			genomföra, så smart och effektivt som möjligt. Har du också ett spännande bygge på gång?
			</p>
			<p>Välkommen att kontakta oss och ta del av vår arbetslust och vårt engagemang.</p>
			</div>
		*/}
        {/*
		<div className="landing__logo">
		<img src={logo} alt="logo" />
		</div>
	*/}
      </div>

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
