import React, { useContext, useState } from "react";
import "./imageSlider.css";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { Htk3Context } from "../Haningetk3App";

const ImageSlider = ({ imgUrls }) => {
  const htk3 = useContext(Htk3Context);

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

      <p className="image_slider_container-desc">{imgUrls[imageIndex].desc}</p>

      {imgUrls[imageIndex].button1 && (
        <button
          onClick={() => htk3.setLink(imgUrls[imageIndex].button1)}
          className="image_slider_container-desc-button"
        >
          Läs mer
        </button>
      )}

      <button
        className="image_slider_container-button"
        id="image_slider_container-button_left"
        onClick={showPrevImage}
      >
        <ChevronLeft />
      </button>
      <button
        className="image_slider_container-button"
        id="image_slider_container-button_right"
        onClick={showNextImage}
      >
        <ChevronRight />
      </button>
      <div className="image_slider_container-button_wrapper">
        <div className="image_slider_container-button-dots_container">
          {imgUrls.map((_, index) => (
            <button key={index} onClick={() => setImageIndex(index)}>
              {index === imageIndex ? (
                <Circle
                  className="image_slider_container-button-dots_container-button"
                  size={20}
                  fill="#fff"
                  stroke="#fff"
                />
              ) : (
                <Circle
                  className="image_slider_container-button-dots_container-button"
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
