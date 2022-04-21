import React from "react";
import { Route, Routes } from "react-router-dom";
import Allcars from "./Allcars/Allcars";
import Hatchback from "./CarTypeComp/Hatchback";
import Sedan from "./CarTypeComp/Sedan";
import SUV from "./CarTypeComp/SUV";
import ViewAllCars from "./CarTypeComp/ViewAllCars";
import Corousel from "./Corousel/Corousel";
import Detail from "./Detail/Detail";
import NotFound from "./notfound/NotFound";
import Form from "./Form/Form";
import Success from "./bookingSuccess/Success";

const RouteComponent = () => {
  return (
    <Routes>
      <Route path="/AllCars" element={<Allcars />} />
      <Route path="/sedan" element={<Sedan />} />
      <Route path="/hatchback" element={<Hatchback />} />
      <Route path="/SUV" element={<SUV />} />
      <Route path="/ViewAllCars" element={<ViewAllCars />} />
      <Route path="/cars/:id" element={<Detail />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/" element={<Corousel />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteComponent;
