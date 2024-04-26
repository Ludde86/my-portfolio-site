import React, { useState } from "react";
import "./haningetk3Landing.css";
import img1 from "../assets/img/img-1.jpg";
import img2 from "../assets/img/img-2.jpg";
import img3 from "../assets/img/img-3.jpg";
import img4 from "../assets/img/img-4.jpg";
import ImageSlider from "./ImageSlider";

const Haningetk3Landing = () => {
  const IMAGES = [img1, img2, img3, img4];

  return (
    <div className="htk3-landing_container">
      <div className="htk3-landing_container-logo_container-wrapper">
        <div className="htk3-landing_container-logo_container"></div>
      </div>

      <div className="htk3-landing_container-event_container">
        <div className="htk3-landing_container-event_container-slider_container">
          <ImageSlider imgUrls={IMAGES} />
        </div>
      </div>
    </div>
  );
};

export default Haningetk3Landing;

/* Image slider #1

const [checked, setChecked] = useState("h1");

  const isChecked = (value) => value === checked;

  const onSelect = ({ target: { value } }) => {
    setChecked(value);
  };

<input
            type="radio"
            name="slide"
            id="h1"
            value="h1"
            checked={isChecked("h1")}
            onChange={onSelect}
          />
          <label
            for="h1"
            className="htk3-landing_container-event_container-slider_container-card"
          >
            <div className="htk3-landing_container-event_container-slider_container-card-row">
              <div className="htk3-landing_container-event_container-slider_container-card-icon">
                1
              </div>
              <div className="htk3-landing_container-event_container-slider_container-card-desc">
                <h4>Välkomsttext</h4>
                <p>Välkomsttext</p>
              </div>
            </div>
          </label>

          <input
            type="radio"
            name="slide"
            id="h2"
            value="h2"
            checked={isChecked("h2")}
            onChange={onSelect}
          />
          <label
            for="h2"
            className="htk3-landing_container-event_container-slider_container-card"
          >
            <div className="htk3-landing_container-event_container-slider_container-card-row">
              <div className="htk3-landing_container-event_container-slider_container-card-icon">
                2
              </div>
              <div className="htk3-landing_container-event_container-slider_container-card-desc">
                <h4>Sponsorer #1</h4>
                <p>Sponsorer #1</p>
              </div>
            </div>
          </label>

          <input
            type="radio"
            name="slide"
            id="h3"
            value="h3"
            checked={isChecked("h3")}
            onChange={onSelect}
          />
          <label
            for="h3"
            className="htk3-landing_container-event_container-slider_container-card"
          >
            <div className="htk3-landing_container-event_container-slider_container-card-row">
              <div className="htk3-landing_container-event_container-slider_container-card-icon">
                3
              </div>
              <div className="htk3-landing_container-event_container-slider_container-card-desc">
                <h4>Nyheter/Vad händer</h4>
                <p>Nyheter/Vad händer</p>
              </div>
            </div>
          </label>

          <input
            type="radio"
            name="slide"
            id="h4"
            value="h4"
            checked={isChecked("h4")}
            onChange={onSelect}
          />
          <label
            for="h4"
            className="htk3-landing_container-event_container-slider_container-card"
          >
            <div className="htk3-landing_container-event_container-slider_container-card-row">
              <div className="htk3-landing_container-event_container-slider_container-card-icon">
                4
              </div>
              <div className="htk3-landing_container-event_container-slider_container-card-desc">
                <h4>Sponsorer #2</h4>
                <p>Sponsorer #2</p>
              </div>
            </div>
          </label>

          <input
            type="radio"
            name="slide"
            id="h5"
            value="h5"
            checked={isChecked("h5")}
            onChange={onSelect}
          />
          <label
            for="h5"
            className="htk3-landing_container-event_container-slider_container-card"
          >
            <div className="htk3-landing_container-event_container-slider_container-card-row">
              <div className="htk3-landing_container-event_container-slider_container-card-icon">
                5
              </div>
              <div className="htk3-landing_container-event_container-slider_container-card-desc">
                <h4>Info</h4>
                <p>Info</p>
              </div>
            </div>
          </label>

          <input
            type="radio"
            name="slide"
            id="h6"
            value="h6"
            checked={isChecked("h6")}
            onChange={onSelect}
          />
          <label
            for="h6"
            className="htk3-landing_container-event_container-slider_container-card"
          >
            <div className="htk3-landing_container-event_container-slider_container-card-row">
              <div className="htk3-landing_container-event_container-slider_container-card-icon">
                6
              </div>
              <div className="htk3-landing_container-event_container-slider_container-card-desc">
                <h4>Tennisskola</h4>
                <p>Tennisskola</p>
              </div>
            </div>
          </label>
*/
