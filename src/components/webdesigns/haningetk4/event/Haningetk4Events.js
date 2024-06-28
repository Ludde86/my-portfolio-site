import React from "react";
import "./haningetk4Events.css";

import img1 from "../../haningetk1/assets/img/htk-logga.png";
import img2 from "../../haningetk1/assets/img/alicja-gancarz-wvDELsJ_E20-unsplash.jpg";
import img3 from "../../haningetk1/assets/img/ben-hershey-K9HgyI3qmqA-unsplash.jpg";
import img4 from "../../haningetk1/assets/img/cristina-anne-costello-rank-Px49iI-unsplash.jpg";
import img5 from "../../haningetk1/assets/img/dmitry-osipenko-v37kr3k_G3M-unsplash.jpg";

const Haningetk4Events = () => {
  let events = [
    { img: img1, title: "title1", desc: "desc1" },
    { img: img2, title: "title2", desc: "desc2" },
    { img: img3, title: "title3", desc: "desc3" },
    { img: img4, title: "title4", desc: "desc4" },
    { img: img5, title: "title5", desc: "desc5" },
  ];

  return (
    <div className="htk4_events">
      {events.map((item, index) => (
        <div id={item.title} key={index} className="htk4_events-event">
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
      <div className="htk4_events-event_dots_container">
        {events.map((item, index) => (
          <a href={`#${item.title}`} key={index}>
            <div className="htk4_events-event_dots_container-dot"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Haningetk4Events;
