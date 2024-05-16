import React from "react";
import "./napra4.css";
import NavbarNap4 from "./navbar/NavbarNap4";
import HomeNap4 from "./home/HomeNap4";
import ServicesNapra4 from "./services/ServicesNapra4";
import FooterNapra4 from "./footer/FooterNapra4";
import InfoNapra4 from "./infous/InfoNapra4";

const Napra4 = () => {
  return (
    <div className="napra4_container">
      <NavbarNap4 />
      <HomeNap4 />
      <ServicesNapra4 />
      <InfoNapra4 />
      <FooterNapra4 />
    </div>
  );
};

export default Napra4;
