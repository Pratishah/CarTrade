import React from "react";
import { Route, Routes } from "react-router-dom";
import Allcars from "./Allcars/Allcars";
import Carcard from "./Card/card";
import FeaturedCars from "./featuredCars/FeaturedCars";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/AllCars" element={<Allcars />} />
    </Routes>
  );
};

export default RouteComponent;
