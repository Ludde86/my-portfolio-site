import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Haningetk1 from "../HaningeTK1";

const Main = () => (
  <Routes>
    <Route exact path="/projects" Component={Haningetk1} />
    <Route exact path="/projects/home" />
    <Route path="/projects/services" />
    <Route path="/projects/about" />
    <Route path="/projects/brands" />
  </Routes>
);

export default Main;
