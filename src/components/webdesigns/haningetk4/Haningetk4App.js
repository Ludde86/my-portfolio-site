import React from "react";
import "./haningetk4App.css";
import Haningetk4Landing from "./landing/Haningetk4Landing";
import Haningetk4Navbar from "./navbar/Haningetk4Navbar";

const Haningetk4App = () => {
  return (
    <div className="haninge4_container">
      <Haningetk4Navbar />
      <Haningetk4Landing />
    </div>
  );
};

export default Haningetk4App;
