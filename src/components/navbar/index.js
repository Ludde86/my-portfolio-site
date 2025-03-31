import React, { useState } from "react";
import Main from "../main";
import "./navbar.css";

const Navbar = () => {
  const [isFading, setIsFading] = useState(false); // Hantera fade-out-state

  const handleFadeOut = (event) => {
    event.preventDefault(); // Hindra standardnavigeringen
    setIsFading(true); // Starta fade-out-effekten
    const href = event.target.getAttribute("href"); // Hämta länkens URL

    setTimeout(() => {
      window.location.href = href; // Navigera till ny sida efter fade-out
    }, 500); // Synkronisera med transition i CSS
  };

  return (
    <div className="app-container">
      <header>
        <nav>
          <div className="links-container">
            {/* 
            <a className="link" href="/resume">
              CV
            </a>
            */}
          </div>
          <div className="links-container">
            <a className="link" href="/" onClick={handleFadeOut}>
              Hem
            </a>
            <a className="link" href="/om-mig" onClick={handleFadeOut}>
              Om mig
            </a>
            <a className="link" href="/projects" onClick={handleFadeOut}>
              Projekt
            </a>
          </div>
          <div className="navbar_button-container search-button">
            <p>x</p>
          </div>
        </nav>

        <div className="navbar_button-container menu-button">
          <input type="checkbox" />
          <span className="first-line"></span>
          <span className="second-line"></span>
          <span className="third-line"></span>
        </div>
      </header>

      <div className="app-container">
        <Main isFading={isFading} />
      </div>
    </div>
  );
};

export default Navbar;
