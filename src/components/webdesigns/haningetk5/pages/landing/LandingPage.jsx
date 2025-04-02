import "./landingPage.css";
import logo from "../../assets/images/thk-logga.png";
import img1 from "../../assets/images/facebook.jpg";
import img2 from "../../assets/images/john-fornander-4R9CcBdQTEg-unsplash.jpg";
import img3 from "../../assets/images/ben-hershey-K9HgyI3qmqA-unsplash.jpg";

import { ArrowRight } from "lucide-react";
import React from "react";

const LandingPage = () => {
  return (
    <div id="landing" className="htk5_landing_container">
      <div className="htk5_landing_container-header">
        <div className="htk5_landing_container-header-left">
          <img src={logo} alt="logo" />
          <p>Senaste Nyheter</p>
        </div>
        <div className="htk5_landing_container-header-right htk5-show">
          <p className="htk5_landing_container-header-right-par">
            Alla Nyheter
          </p>
          <ArrowRight className="htk5_landing_container-header-right-arrow_right" />
        </div>
      </div>
      <div className="htk5_landing_container-news">
        <div className="htk5_landing_container-news-event">
          <img
            src={img1}
            alt="img1"
            className="htk5_landing_container-news-event-img"
          />
          <p>Mar 01, 2025</p>
          <h3 className="htk5_landing_container-news-event-title">
            Tennisklubben och Facebook?
          </h3>
        </div>
        <div className="htk5_landing_container-news-event">
          <img
            src={img2}
            alt="img2"
            className="htk5_landing_container-news-event-img"
          />
          <p>Feb 01, 2025date</p>
          <h3 className="htk5_landing_container-news-event-title">
            Björns Cup
          </h3>
        </div>
        <div className="htk5_landing_container-news-event">
          <img
            src={img3}
            alt="img3"
            className="htk5_landing_container-news-event-img"
          />
          <p>Jan 01, 2025</p>
          <h3 className="htk5_landing_container-news-event-title">
            Info från styrelsen
          </h3>
        </div>
        <div className="htk5_landing_container-header-right htk5-hidden">
          <p className="htk5_landing_container-header-right-par">
            Alla Nyheter
          </p>
          <ArrowRight className="htk5_landing_container-header-right-arrow_right" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
