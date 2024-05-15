import React from "react";
import "./servicesNapra4.css";
import img1 from "../../naprapatrehab/naprapatrehab_img/DSC06469.jpeg";
import img2 from "../../naprapatrehab/naprapatrehab_img/DSC06565.jpeg";
import img3 from "../../naprapatrehab/naprapatrehab_img/DSC06362.jpeg";

const ServicesNapra4 = () => {
  return (
    <div className="napra4_services">
      <div className="napra4_services-service">
        <div className="napra4_services-service-title">
          <img src={img1} alt="img1" />
          <h5>Naprapatbehandling nybesök/återbesök </h5>
          <h6>Tid: 30-40 min</h6>
        </div>
        <div className="napra4_services-service-desc">
          <p>
            Naprapati är en manuell terapiform där du vid ett besök får
            diagnostisering, behandling och rehabilitering av smärttillstånd och
            funktionella besvär i skelett, muskler och leder.
            Naprapatbehandlingen syftar till att återställa kroppens normala
            rörlighet och funktion samt minska smärtan. För att uppnå detta
            tillämpas olika behandlingsmetoder och tekniker som ex.
            ledmanipulation och mobilisering, mjukdelsbehandling som massage,
            stretching, men även TENS och dry needling.
          </p>
          <h4>750:-</h4>
        </div>
      </div>

      <div className="napra4_services-service">
        <div className="napra4_services-service-title">
          <img src={img2} alt="img2" />
          <h5>Naprapatbehandling pensionär/student </h5>
          <h6>Tid: 30-40 min</h6>
        </div>
        <div className="napra4_services-service-desc">
          <p>
            Naprapati är en manuell terapiform där du vid ett besök får
            diagnostisering, behandling och rehabilitering av smärttillstånd och
            funktionella besvär i skelett, muskler och leder.
            Naprapatbehandlingen syftar till att återställa kroppens normala
            rörlighet och funktion samt minska smärtan. För att uppnå detta
            tillämpas olika behandlingsmetoder och tekniker som ex.
            ledmanipulation och mobilisering, mjukdelsbehandling som massage,
            stretching, men även TENS och dry needling.
          </p>
          <h4>700:-</h4>
        </div>
      </div>

      <div className="napra4_services-service">
        <div className="napra4_services-service-title">
          <img src={img3} alt="img3" />
          <h5>Massage </h5>
          <h6>Tid: 30 min</h6>
        </div>
        <div className="napra4_services-service-desc">
          <p>
            Denna tjänst är till för dig som inte söker för några specifika
            besvär utan önskar enklare mjukdelsbehandling i form av massage,
            triggerpunktsbehandling och stretch. Vi lägger lite extra fokus på
            de områden i kroppen där du har mer muskulära spänningar.
          </p>
          <h4>730:-</h4>
        </div>
      </div>
    </div>
  );
};

export default ServicesNapra4;
