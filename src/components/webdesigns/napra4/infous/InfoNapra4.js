import React from "react";
import "./infoNapra4.css";
import ImageSlider from "./ImageSlider";

const InfoNapra4 = () => {
  return (
    <div className="napra4_info">
      <div className="napra4_info-desc">
        <h1>Naprapat & Rehabcenter Haninge</h1>
        <p>Naprapatklinik i Haninge, 2 mil söder om Stockholm.</p>
        <p>
          Drivs och ägs idag av tre legitimerade naprapater Line Jonasson
          (0704540923), Sofie Schmidt (0702443473) och Susanne Nyström
          (0704530288).
        </p>
        <p>Hos oss kan du betala med swish, kort, presentkort.</p>
        <p>
          Vi är även anslutna till friskvårdsportalerna Wellnet, Actiway och Min
          Friskvård (friskvårdskuponger) samt försäkringsbolagsförmedlare: Falck
          Healthcare (DKV hälsa, SEB), Nordic Netcare (IF) och SOS
          International.
        </p>
      </div>
      <div className="napra4_info-images">
        <ImageSlider />
      </div>
    </div>
  );
};

export default InfoNapra4;
