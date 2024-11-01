import React from "react";
import "./napra3landingpage.css";

const Napra3LandingPage = () => {
  return (
    <div className="napra3-landing-container">
      <div className="napra3-landing-container_text-container">
        <h4>Naprapati Massage Friskvård Rehab</h4>
        <h1>Naprapat & Rehabcenter i Haninge</h1>
        <div className="napra3-landing-container_text-container-underline"></div>
        <p>
          Vi brinner för vårat yrke och den känslan som infinner sig när en
          patient går ifrån en behandling med mindre smärta. Vi vill på bästa
          sätt finnas till för er som på något sätt kan tänkas behöva vår hjälp.
        </p>

        {/*
        <div className="napra3-landing-container_button-container">
          <button>
            <a
              href="https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747"
              target="_blank"
              rel="noreferrer"
            >
              Boka Tid
            </a>
          </button>
          <button id="napra3-landing-container_button-container_services-button">
            <a href="#Tjänster">Våra Tjänster</a>
          </button>
        </div>
            */}
      </div>
    </div>
  );
};

export default Napra3LandingPage;
