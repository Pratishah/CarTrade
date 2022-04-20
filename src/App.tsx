import React from "react";
import Footer from "./Components/Footer/footer";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Carcard from "./Components/Card/card";
import Nav from "./Components/nav/nav";
import RouteComponent from "./Components/RouteComponent";
import Corousel from "./Components/Corousel/Corousel";
import FeaturedCars from "./Components/featuredCars/FeaturedCars";

const App = () => {
  return (
    <div>
      <Nav />
      <Corousel />
      <FeaturedCars />

      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
