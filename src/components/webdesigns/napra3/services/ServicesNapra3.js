import React from "react";
import "./servicesNapra3.css";
import logo1 from "../assets/img/wellnet-logga.png";
import logo2 from "../assets/img/Epassi Logo.png";

const ServicesNapra3 = () => {
  return (
    <div className="napra3-services-container">
      <div className="napra3-services-container_desc-container">
        <div className="napra3-services-container_service-container">
          <div className="napra3-services-container_service-container_title-container">
            <h4>Naprapatbehandling Nybesök/återbesök 750:-</h4>
            <p>Tid: 30-40min</p>
          </div>
        </div>

        <div className="napra3-services-container_service-container">
          <div className="napra3-services-container_service-container_title-container">
            <h4>Naprapatbehandling Pensionär/student 700:-</h4>
            <p>Tid: 30-40min</p>
          </div>
        </div>

        <div className="napra3-services-container_service-container">
          <div className="napra3-services-container_service-container_title-container">
            <h4>Massage 730:-</h4>
            <p>Tid: 30min</p>
          </div>
        </div>

        <div className="napra3-services-container_service-container">
          <div className="napra3-services-container_service-container_title-container">
            <h4>MammaMageträning Nybesök 600:-</h4>
            <p>Tid: 50min</p>
          </div>
        </div>

        <div className="napra3-services-container_service-container">
          <div className="napra3-services-container_service-container_title-container">
            <h4>MammaMageträning Återbesök 550:-</h4>
            <p>Tid: 40min</p>
          </div>
        </div>

        <div className="napra3-landing-container_button-container">
          <button>
            <a
              href="https://www.bokadirekt.se/places/naprapat-rehabcenter-haninge-10747"
              target="_blank"
              rel="noreferrer"
            >
              Mer info om våra Tjänster
            </a>
          </button>
        </div>
      </div>

      <div className="napra3-services-container_logo-container">
        <img src={logo2} alt="logo2" />
        <img src={logo1} alt="logo1" />
      </div>
    </div>
  );
};

export default ServicesNapra3;
