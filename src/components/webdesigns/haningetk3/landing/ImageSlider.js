import React, { useState } from "react";
import "./imageSlider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

const ImageSlider = ({ imgUrls }) => {
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
    <div className="image_slider_container">
      <img
        className="image_slider_container-image"
        src={imgUrls[imageIndex].img}
        alt=""
      />

      {/*
      <p className="image_slider_container-desc">{imgUrls[imageIndex].desc}</p>
      */}

      <button
        className="image_slider_container-button"
        id="image_slider_container-button_left"
        onClick={showPrevImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="image_slider_container-button"
        id="image_slider_container-button_right"
        onClick={showNextImage}
      >
        <ArrowBigRight />
      </button>
      <div className="image_slider_container-button_wrapper">
        <div className="image_slider_container-button-dots_container">
          {imgUrls.map((_, index) => (
            <button key={index} onClick={() => setImageIndex(index)}>
              {index === imageIndex ? (
                <CircleDot
                  className="image_slider_container-button-dots_container-button"
                  size={20}
                />
              ) : (
                <Circle
                  className="image_slider_container-button-dots_container-button"
                  size={20}
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
