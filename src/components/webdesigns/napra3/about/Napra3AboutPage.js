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
      <div className="napra3-about-header">
        <div className="napra3-about-header-line"></div>
        <h1>VÅRA TJÄNSTER</h1>
      </div>
      <div className="napra3-about-container-desc">
        <h3>
          Vi erbjuder ett brett utbud av behandlingar för att stödja din hälsa
          och ditt välbefinnande
        </h3>
        <p>
          Hos oss hittar du naprapatbehandling, massage och akupunktur – alla
          utformade för att lindra smärta, öka rörlighet och främja
          återhämtning. Vårt mål är att ge dig en personlig och professionell
          behandling som hjälper dig att må bra och leva ett aktivt liv utan
          begränsningar
        </p>
      </div>
      <div id="Tjänster" className="napra3-about-container_services-container">
        <div className="napra3-about-container_services-container_service-card-container">
          <div
            id="napra3-about-container_services-container_service-card-1"
            className="napra3-about-container_services-container_service-card"
          ></div>
          <div className="napra3-about-container_services-container_service-card_desc-container">
            <h3>Naprapatbehandling</h3>
            <p>
              Naprapatbehandling är en metod för att lindra smärta och stelhet i
              muskler och leder genom en kombination av manuella tekniker som
              massage, stretching och justering.
            </p>
          </div>
        </div>

        <div className="napra3-about-container_services-container_service-card-container">
          <div
            id="napra3-about-container_services-container_service-card-2"
            className="napra3-about-container_services-container_service-card"
          ></div>
          <div className="napra3-about-container_services-container_service-card_desc-container">
            <h3>Massage</h3>
            <p>
              Massage är en avslappnande och behandlande teknik som hjälper till
              att minska muskelspänningar, förbättra blodcirkulationen och
              lindra stress.
            </p>
          </div>
        </div>

        <div className="napra3-about-container_services-container_service-card-container">
          <div
            id="napra3-about-container_services-container_service-card-3"
            className="napra3-about-container_services-container_service-card"
          ></div>
          <div className="napra3-about-container_services-container_service-card_desc-container">
            <h3>Akupunktur</h3>
            <p>
              Akupunktur är en behandlingsmetod som stimulerar kroppens egen
              läkningsprocess genom att använda tunna nålar på specifika
              punkter.
            </p>
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
