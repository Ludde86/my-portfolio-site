import React from "react";
import "./napra3aboutpage.css";
import { Carousel } from "react-responsive-carousel";
import car1 from "../../naprapatrehab/naprapatrehab_img/DSC06580___serialized1.jpeg";
import car2 from "../../naprapatrehab/naprapatrehab_img/DSC06712.jpeg";
import car3 from "../../naprapatrehab/naprapatrehab_img/DSC06565.jpeg";
import car4 from "../../naprapatrehab/naprapatrehab_img/DSC06534.jpeg";
import car5 from "../../naprapatrehab/naprapatrehab_img/DSC06691.jpeg";
import ServicesNapra3 from "../services/ServicesNapra3";

const Napra3AboutPage = () => {
  return (
    <div className="napra3-about-container">
      <div className="napra3-about-container_services-container">
        <div
          id="napra3-about-container_services-container_service-card-1"
          className="napra3-about-container_services-container_service-card"
        >
          <div className="napra3-about-container_services-container_service-card_shade">
            <h3>Naprapatbehandling</h3>
            {/*
                            <p>Naprapati är en manuell terapiform där du vid ett besök får diagnostisering, behandling och rehabilitering av smärttillstånd och funktionella besvär i skelett, muskler och leder.</p>
                        */}
          </div>
        </div>
        <div
          id="napra3-about-container_services-container_service-card-2"
          className="napra3-about-container_services-container_service-card"
        >
          <div className="napra3-about-container_services-container_service-card_shade">
            <h3>Massage </h3>
            {/*
                            <p>Denna tjänst är till för dig som inte söker för några specifika besvär utan önskar enklare mjukdelsbehandling i form av massage, triggerpunktsbehandling och stretch.</p>
                        */}
          </div>
        </div>
        <div
          id="napra3-about-container_services-container_service-card-3"
          className="napra3-about-container_services-container_service-card"
        >
          <div className="napra3-about-container_services-container_service-card_shade">
            <h3>MammaMageträning </h3>
            {/*
                            <p>Som certifierad MammaMagetränare kan jag ge dig konsultationer kring magen, diasatser och dynfunktioner för att sedan tillsammans med dig hitta ett mer optimalt muskelengagemang.</p>
                        */}
          </div>
        </div>
      </div>

      <ServicesNapra3 />

      <div className="napra3-about-container_desc-carousel-container">
        <div className="napra3-about-container_desc-container">
          <h1 className="napra3-about-container_desc-container_title">
            Naprapat & Rehabcenter Haninge
          </h1>
          <p className="napra3-about-container_desc-container_text">
            Naprapatklinik i Haninge, 2 mil söder om Stockholm.
          </p>
          <p className="napra3-about-container_desc-container_text">
            Drivs och ägs idag av tre legitimerade naprapater Line Jonasson
            (0704540923), Sofie Schmidt (0702443473) och Susanne Nyström
            (0704530288).
          </p>
          <p className="napra3-about-container_desc-container_text">
            Hos oss kan du betala med swish, kort, presentkort.{" "}
          </p>
          <p className="napra3-about-container_desc-container_text">
            Vi är även anslutna till friskvårdsportalerna Wellnet, Actiway och
            Min Friskvård (friskvårdskuponger) samt försäkringsbolagsförmedlare:
            Falck Healthcare (DKV hälsa, SEB), Nordic Netcare (IF) och SOS
            International.
          </p>
        </div>
        <Carousel className="napra3-about-container_carousel-container">
          <div className="napra3-about-container_carousel-container_img">
            <img src={car1} alt="1" />
            {/*
            <p className="legend">Legend 1</p>
        */}
          </div>

          <div className="napra3-about-container_carousel-container_img">
            <img src={car3} alt="3" />
          </div>
          <div className="napra3-about-container_carousel-container_img">
            <img src={car4} alt="4" />
          </div>
          <div className="napra3-about-container_carousel-container_img">
            <img src={car5} alt="5" />
          </div>
          <div className="napra3-about-container_carousel-container_img">
            <img src={car2} alt="2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Napra3AboutPage;
