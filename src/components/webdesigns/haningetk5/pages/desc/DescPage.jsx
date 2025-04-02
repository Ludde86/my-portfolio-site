import "./descPage.css";
import React from "react";

const DescPage = () => {
  return (
    <div className="desc_container">
      <h1>
        Tyresö Tennisklubb har funnits på Tyresöhalvön{" "}
        <span id="color-green">sedan</span> <span id="color-green">1945</span>
      </h1>
      <p>
        Nu som förr spelas det på klassiskt rött grus. Banan ligger på
        Tegelbruksvägen 24. Klubben är aktiv under sommarhalvåret.
      </p>
    </div>
  );
};

export default DescPage;
