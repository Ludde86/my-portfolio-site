import React, { useEffect, useState } from "react";
import "./js4App.css";
import img1 from "../../../img/bridge.jpg";
import img2 from "../../../img/green-gekko.jpg";
import img3 from "../../../img/nature-beginning.jpg";
import img4 from "../../../img/round-drop.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imagesData = [
  { url: img1, title: "Bild1" },
  { url: img2, title: "Bild2" },
  { url: img3, title: "Bild3" },
  { url: img4, title: "Bild4" },
];

const Js4App = () => {
  const [image, setImage] = useState(0);
  const [animationNext, setAnimationNext] = useState(false);
  const [animationPrev, setAnimationPrev] = useState(false);

  useEffect(() => {
    setAnimationNext(true);

    setTimeout(() => {
      setAnimationNext(false);
    }, "500");
  }, []);

  const handleSetImage = (direction) => {
    if (direction === "next") {
      setAnimationNext(false);
      if (image === imagesData.length - 1) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
      setAnimationNext(true);

      setTimeout(() => {
        setAnimationNext(false);
      }, "500");
    } else {
      setAnimationPrev(false);
      if (image === 0) {
        setImage(imagesData.length - 1);
      } else {
        setImage(image - 1);
      }
      setAnimationPrev(true);

      setTimeout(() => {
        setAnimationPrev(false);
      }, "500");
    }
  };

  return (
    <div className="js4_container">
      <h3>#2 - Image slider #1</h3>
      {animationNext ? (
        <img
          src={imagesData[image].url}
          alt="img1"
          className="js4_container-image js4_container-animation_next"
        />
      ) : (
        <img
          hidden={animationPrev}
          src={imagesData[image].url}
          alt="img1"
          className="js4_container-image"
        />
      )}

      {animationPrev && (
        <img
          src={imagesData[image].url}
          alt="img1"
          className="js4_container-image js4_container-animation_prev"
        />
      )}

      <div className="js4_container-button_container">
        <button onClick={() => handleSetImage("prev")}>
          <ChevronLeft fill="#fff" stroke="#fff" />
        </button>
        <p>{imagesData[image].title}</p>
        <button onClick={() => handleSetImage("next")}>
          <ChevronRight fill="#fff" stroke="#fff" />
        </button>
      </div>
    </div>
  );
};

export default Js4App;
