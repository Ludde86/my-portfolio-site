import React, { useState } from "react";
import "./imageSlider.css";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

import img1 from "../../naprapatrehab/naprapatrehab_img/DSC06580___serialized1.jpeg";
import img2 from "../../naprapatrehab/naprapatrehab_img/DSC06565.jpeg";
import img3 from "../../naprapatrehab/naprapatrehab_img/DSC06534.jpeg";
import img4 from "../../naprapatrehab/naprapatrehab_img/DSC06691.jpeg";
import img5 from "../../naprapatrehab/naprapatrehab_img/DSC06712.jpeg";

const ImageSlider = () => {
  const imgUrls = [img1, img2, img3, img4, img5];

  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imgUrls.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imgUrls.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  return (
    <div className="napra4_slider">
      <img className="napra4_slider-image" src={imgUrls[imageIndex]} alt="" />

      <button
        className="napra4_slider-button"
        id="napra4_slider-button_left"
        onClick={showPrevImage}
      >
        <ChevronLeft />
      </button>
      <button
        className="napra4_slider-button"
        id="napra4_slider-button_right"
        onClick={showNextImage}
      >
        <ChevronRight />
      </button>
      <div className="napra4_slider-button_wrapper">
        <div className="napra4_slider-button-dots_container">
          {imgUrls.map((_, index) => (
            <button key={index} onClick={() => setImageIndex(index)}>
              {index === imageIndex ? (
                <Circle
                  className="napra4_slider-button-dots_container-button"
                  size={20}
                  fill="#fff"
                  stroke="#fff"
                />
              ) : (
                <Circle
                  className="napra4_slider-button-dots_container-button"
                  size={16}
                  fill="#aaa"
                  stroke="#aaa"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
