import React, { useEffect } from "react";
import "./js3App.css";
import img1 from "../../../img/round-drop.jpg";
import img2 from "../../../img/bridge.jpg";
import img3 from "../../../img/green-gekko.jpg";
import img4 from "../../../img/nature-beginning.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Js3App = () => {
  let slider;
  let sliderList;
  let thumbnail;
  let thumbnailItems;

  useEffect(() => {
    slider = document.querySelector(".js3_container-slider");
    sliderList = slider.querySelector(
      ".js3_container-slider .js3_container-list"
    );

    thumbnail = document.querySelector(
      ".js3_container-slider .js3_container-thumbnail"
    );
    thumbnailItems = thumbnail.querySelectorAll(".js3_container-item");

    thumbnail.appendChild(thumbnailItems[0]);
  }, []);

  const handleNextBtn = () => {
    moveSlider(".js3_container-icons-next");
  };

  const handlePrevBtn = () => {
    moveSlider(".js3_container-icons-prev");
  };

  function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll(".js3_container-item");
    let thumbnailItems = document.querySelectorAll(
      ".js3_container-thumbnail .js3_container-item"
    );

    if (direction === ".js3_container-icons-next") {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add(".js3_container-icons-next");
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      slider.classList.add(".js3_container-icons-prev");
    }

    slider.addEventListener(
      "animationend",
      function () {
        if (direction === ".js3_container-icons-next") {
          slider.classList.remove(".js3_container-icons-next");
        } else {
          slider.classList.remove(".js3_container-icons-prev");
        }
      },
      { once: true }
    ); // Remove the event listener after it's triggered once
  }

  return (
    <div className="js3_container">
      <header>
        <nav>
          <a href="#" className="active">
            Hem
          </a>
          <a href="#">Om Oss</a>
          <a href="#">Våra Tjänster</a>
          <a href="#">Kontakt</a>
        </nav>
      </header>

      <div className="js3_container-slider">
        <div className="js3_container-list">
          <div className="js3_container-item">
            <img src={img1} alt="img1" />

            <div className="js3_container-content">
              <div className="js3_container-content-title">MAGIC SLIDER</div>
              <div className="js3_container-content-type">DROPPE</div>
              <div className="js3_container-content-description">Bild1</div>
              <div className="js3_container-content-button">
                <button>LÄS MER</button>
              </div>
            </div>
          </div>

          <div className="js3_container-item">
            <img src={img2} alt="img2" />

            <div className="js3_container-content">
              <div className="js3_container-content-title">MAGIC SLIDER</div>
              <div className="js3_container-content-type">BRO</div>
              <div className="js3_container-content-description">Bild2</div>
              <div className="js3_container-content-button">
                <button>LÄS MER</button>
              </div>
            </div>
          </div>

          <div className="js3_container-item">
            <img src={img3} alt="img3" />

            <div className="js3_container-content">
              <div className="js3_container-content-title">MAGIC SLIDER</div>
              <div className="js3_container-content-type">GEKKO</div>
              <div className="js3_container-content-description">Bild3</div>
              <div className="js3_container-content-button">
                <button>LÄS MER</button>
              </div>
            </div>
          </div>

          <div className="js3_container-item">
            <img src={img4} alt="img4" />

            <div className="js3_container-content">
              <div className="js3_container-content-title">MAGIC SLIDER</div>
              <div className="js3_container-content-type">START</div>
              <div className="js3_container-content-description">Bild4</div>
              <div className="js3_container-content-button">
                <button>LÄS MER</button>
              </div>
            </div>
          </div>
        </div>

        <div className="js3_container-thumbnail">
          <div className="js3_container-item">
            <img src={img1} alt="img1" />
          </div>
          <div className="js3_container-item">
            <img src={img2} alt="img1" />
          </div>
          <div className="js3_container-item">
            <img src={img3} alt="img1" />
          </div>
          <div className="js3_container-item">
            <img src={img4} alt="img1" />
          </div>
        </div>

        <div className="js3_container-icons">
          <button className="js3_container-icons-prev" onClick={handlePrevBtn}>
            <ChevronLeft />
          </button>
          <button className="js3_container-icons-next" onClick={handleNextBtn}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Js3App;
