import React, { useEffect, useRef, useState } from "react";
import About from "./aboutme";
import Contact from "./contact";

import Imagesection from "./imagesection";
import "./landingpage.css";

import energiScreen from "../img/energi-screen.png";
import byggScreen from "../img/bygg-screen.png";
import sakerhetScreen from "../img/sakerhet-screen.png";
import samhalleScreen from "../img/samhalle-screen.png";
import tennisScreen from "../img/tennis-screen.png";
import napraScreen from "../img/naprapat-screen.png";
import elScreen from "../img/elcomfort-1.png";
import napraScreen2 from "../img/napra-1.png";

import vid from "../videos/coding-hero.mp4";
import { ArrowDown } from "lucide-react";

import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const Landing = ({ isFading }) => {
  const { register, reset, handleSubmit } = useForm();

  const [from, setFrom] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const [fadeIn, setFadeIn] = useState(false); // Hantera fade-in som state

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
    console.log("Landingpage useEffect triggas");
    setFadeIn(true); // Uppdatera state när komponenten mountas
  }, []);

  return (
    <div className={`landing-container ${fadeIn ? "fade-in" : ""}`}>
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
                onChange={handleSetFrom}
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

        <div className="text-section">
          <p>
            Glöm inte att ta del av min kostnadsfria mall! Det är ett perfekt
            sätt att få en förtitt på vad vi kan skapa tillsammans. Hör av dig
            via e-post, så skickar jag mallen direkt och diskuterar hur vi kan
            skapa en hemsida som passar just era behov.
          </p>
        </div>
      </div>
      <Contact />
      <About />

      <footer className="main-footer">
        <p>Kontakt: bslbjorn@gmail.com</p>
        <p>Ludvig Björn &copy; 2025</p>
        <p>Orgnummer: 198608050673</p>
      </footer>
    </div>
  );
};

export default Landing;
