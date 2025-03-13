import React from "react";
import Landing from "../landing/Landing";
import News from "../news/News";
import Operations from "../operations/Operations";
import Projects from "../projects/Projects";
import "./main.css";
import "../landing/landing.css";
const Main = () => {
  return (
    <div className="main" id="start">
      <Landing />
      {/*
      <div className="landing__content">
        <div className="landing__about">
          <p>
            <span className="landing__title">Hedström & Taube</span> erbjuder
            alla typer av projektledning inom bygg och anläggning, oavsett
            vilken typ av entreprenad ni valt. Det är grunden, men inte vad som
            gör oss unika. Det som särskiljer oss är vår passion.
          </p>
          <p>
            För oss är varje nybyggnation eller renovering en spännande utmaning
            som vi vill vara med och genomföra, så smart och effektivt som
            möjligt. Har du också ett spännande bygge på gång?
          </p>
          <p>
            Välkommen att kontakta oss och ta del av vår arbetslust och vårt
            engagemang.
          </p>
        </div>
				<div className="landing__logo">
				<img src={logo} alt="logo" />
				</div>
      </div>
			*/}
      <Projects />
      {/*
			<News />
			<Operations />
			 */}
    </div>
  );
};

export default Main;
