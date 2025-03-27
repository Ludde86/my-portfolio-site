import React, { useEffect, useRef, useState } from "react";
import About from "./aboutme";
import Contact from "./contact";
import Whatis from "./whatis";
import Imagesection from "./imagesection";
import "./landingpage.css";

import reactLogo from "../img/react-icon.png";
import htmlLogo from "../img/html-icon.jpg";
import cssLogo from "../img/css-icon.png";
import javascriptLogo from "../img/java-script-icon.jpg";
import energiScreen from "../img/energi-screen.png";
import byggScreen from "../img/bygg-screen.png";
import sakerhetScreen from "../img/sakerhet-screen.png";
import samhalleScreen from "../img/samhalle-screen.png";
import tennisScreen from "../img/tennis-screen.png";
import napraScreen from "../img/naprapat-screen.png";
import elScreen from "../img/elcomfort-1.png";
import napraScreen2 from "../img/napra-1.png";

import vid from "../videos/coding-hero.mp4";
import { ArrowDown, ArrowDownRight } from "lucide-react";

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Landing = ({ isFading }) => {
  const { register, reset, handleSubmit } = useForm();

  const [from, setFrom] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  // const [result, setResult] = useState("Ditt meddelande har skickats!");

  const landingPageContainerRef = useRef(null); // Skapa en ref

  const handleSetFrom = (e) => {
    setFrom(e.target.value);
  };

  const accessKey = process.env.REACT_APP_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: from,
      subject: "Nytt kontaktmeddelande från din webbplats",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult("Ditt meddelande har skickats!");
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(
        "Det gick tyvärr inte att skicka ditt meddelande just nu. Försök igen om en liten stund!"
      );
    },
  });

  useEffect(() => {
    console.log("Aboutpage useEffect triggas");
    const landingPageContainerRef =
      document.querySelector(".landing-container");
    if (landingPageContainerRef) {
      console.log("Element hittades:", landingPageContainerRef);
      landingPageContainerRef.classList.add("fade-in");
    } else {
      console.log("Elementet hittades inte");
    }
  }, []);

  return (
    <div ref={landingPageContainerRef} className="landing-container">
      <div className={`hero-container ${isFading ? "fade-out" : ""}`}>
        <video
          className="background-video"
          type="video/mp4"
          autoPlay
          playsInline
          loop
          muted
          preload="metadata"
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className="overlay">
          <div className="text-section">
            {/*
            <h1>
              Låt oss skapa en webbplats som gör er till det självklara valet
            </h1>
              */}
            <h1>Låt oss skapa en webbplats som imponerar på era besökare.</h1>
            <p>
              Modern, lättnavigerad design skräddarsydd efter era behov. Färdig
              hemsida inom två veckor.
            </p>
          </div>
          <Imagesection />
          <div className="text-section">
            <p>
              Vill du se vad jag kan göra för dig? Ta del av mina senaste
              projekt där jag har hjälpt företag och föreningar att förverkliga
              sin digitala vision. Skicka er e-post, så återkommer jag
              personligen. Som en introduktion får du en kostnadsfri mall eller
              landningssida som visar potentialen för din framtida webbplats.
            </p>
          </div>

          <div className="mail-section">
            <form
              className="landing_container-button_section"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                placeholder="Ange E-post"
                onInvalid={(e) => e.target.setCustomValidity("Ange din e-post")}
                {...register("email", { required: true })}
                required
              />
              <button>Skicka</button>
            </form>

            <p>{result}</p>
          </div>

          <div className="landing_container-text-section">
            <h1>Mina senaste projekt och mallar</h1>

            <a href="/projects" className="landing_container-text-section-icon">
              <ArrowDown size={40} id="landing-container-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="landing-container-grid">
        {/* 
        <div
          className="landing-container-grid-container"
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-react">
            <img src={reactLogo} alt="react-logo" />
          </a>
        </div>
        <div
          className="landing-container-grid-container "
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-javascript">
            <img src={javascriptLogo} alt="javascrip-logo" />
          </a>
        </div>
        <div
          className="landing-container-grid-container"
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-html">
            <img src={htmlLogo} alt="html-logo" />
          </a>
        </div>
        <div
          className="landing-container-grid-container"
          id="landing-container-grid-container-col-1"
        >
          <a href="#goto-css">
            <img src={cssLogo} alt="css-logo" />
          </a>
        </div>
        */}

        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          {/*
          <a
            href="/projects"
            className="landing-container-grid-col-span-2-text-icon"
          >
            <ArrowDownRight
              size={40}
              id="landing-container-grid-col-span-2-text-icon-icon"
            />
          </a>
          <div id="landing-container-grid-col-span-2-text">
            <p id="blue">Din hemsida kan se ut så här</p>
          </div>
          <div
            className="landing-container-grid-col-span-2-text-underline"
            id="blue-underline"
          ></div>
            */}
        </div>

        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="https://www.napracura.se/" target="_blank" rel="noreferrer">
            <img src={napraScreen2} alt="energi-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a
            href="https://elcomfort-2.surge.sh/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={elScreen} alt="energi-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={energiScreen} alt="energi-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={byggScreen} alt="bygg-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={sakerhetScreen} alt="sakerhet-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={samhalleScreen} alt="sakerhet-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={tennisScreen} alt="tennis-screen" />
          </a>
        </div>
        <div className="landing-container-grid-container landing-container-grid-col-span-2">
          <a href="/projects">
            <img src={napraScreen} alt="napra-screen" />
          </a>
        </div>

        {/*
      <div className="landing-container-about">
        <About />
        <Contact />
      </div>
      <div className="skills-container">
        <text className="skills-text">
          React | React Native | JavaScript | HTML | CSS | Java
        </text>
      </div>
          */}
      </div>
      <Contact />
      <About />
      {/*
      <Whatis />
       */}
      <footer className="main-footer">
        <p>Kontakt: bslbjorn@gmail.com</p>
        <p>Ludvig Björn &copy; 2025</p>
        <p>Orgnummer: 198608050673</p>
      </footer>
    </div>
  );
};

export default Landing;
