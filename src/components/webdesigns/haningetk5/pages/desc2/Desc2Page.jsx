import "./desc2Page.css";
import React from "react";
import vid from "../../assets/videos/take-tennis.mp4";

const Desc2Page = () => {
  return (
    <div className="desc2_container">
      <video
        className="desc2_container-video"
        type="video/mp4"
        autoPlay
        playsInline
        loop
        muted
        preload="metadata"
      >
        <source src={vid} type="video/mp4" />
      </video>
      <div className="desc2_container-text">
        <h1>Medlemskap, Priser & Spelschema</h1>
        <p>
          Vid önskan om medlemskap kontakta Christian Hellevik. e-post:
          christian.hellevik@opusett.se
        </p>
        <p>
          Medlemsavgiften är 350 kr för medlem och 50 kr för familjemedlem som
          bor hemma.
        </p>
        <p>Våra öppettider under säsong är kl. 08-20. </p>
        <button>Boka bana</button>
      </div>
    </div>
  );
};

export default Desc2Page;
