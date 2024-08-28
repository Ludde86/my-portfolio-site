import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeNapra2 from "../home/HomeNapra2";
import ServicesNapra2 from "../services/ServicesNapra2";
import AboutNapra2 from "../about/AboutNapra2";
import BrandsNapra2 from "../brands/BrandsNapra2";

const Main = () => (
  <Routes>
    <Route exact path="/projects" Component={HomeNapra2} />
    <Route exact path="/projects/home" Component={HomeNapra2} />
    <Route path="/projects/services" component={ServicesNapra2} />
    <Route path="/projects/about" component={AboutNapra2} />
    <Route path="/projects/brands" component={BrandsNapra2} />
  </Routes>
);

export default Main;
