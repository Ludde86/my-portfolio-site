import React from "react";
import "./jsVideo.css";
import video1 from "../../assets/19636643-sd_426_240_30fps.mp4";
import { X } from "lucide-react";

const Js11Video = ({ setVideoActive }) => {
  return (
    <div className="js11_video_container">
      <X
        className="js11_video_container-close"
        color="#fff"
        size={50}
        onClick={() => setVideoActive(false)}
      />
      <div className="js11_video_container-video">
        <video controls width="100%" height="100%">
          <source src={video1}></source>
        </video>
      </div>
    </div>
  );
};

export default Js11Video;
