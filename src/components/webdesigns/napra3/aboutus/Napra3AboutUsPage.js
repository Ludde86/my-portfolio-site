import React from "react";
import "./napra3aboutuspage.css";

const Napra3AboutUsPage = () => {
  return (
    <div className="napra3-aboutus-container">
      <div id="Om oss" className="napra3-aboutus-container_img-container">
        <div className="napra3-aboutus-container_img-container-img"></div>
      </div>

      <div className="napra3-aboutus-container_desc-container">
        <div className="napra3-aboutus-container_desc-container-header">
          <h1>OM OSS</h1>
          <div className="napra3-aboutus-container_desc-container-header-line"></div>
        </div>
        <div className="napra3-aboutus-container_desc-container-highlight">
          <h1>Vi hjälper dig att må bra</h1>
        </div>
        <p>
          Vi är specialister på naprapati och rehabilitering och hjälper dig att
          återfå rörlighet, minska smärta och bygga upp styrkan.
        </p>
        {/*
        Med en
          personlig och professionell behandling skapar vi vägar till ett
          smärtfritt och aktivt liv för dig.
        */}
      </div>
    </div>
  );
};

export default Napra3AboutUsPage;
