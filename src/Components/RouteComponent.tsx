import React from "react";
import { Route, Routes } from "react-router-dom";
import Allcars from "./Allcars/Allcars";
import Hatchback from "./CarTypeComp/Hatchback";
import Sedan from "./CarTypeComp/Sedan";
import SUV from "./CarTypeComp/SUV";
import Corousel from "./Corousel/Corousel";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/AllCars" element={<Allcars />} />
      <Route path="/sedan" element={<Sedan />} />
      <Route path="/hatchback" element={<Hatchback />} />
      <Route path="/SUV" element={<SUV />} />
      <Route path="/" element={<Corousel />} />
    </Routes>
  );
};

export default RouteComponent;
