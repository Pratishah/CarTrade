import React from "react";
import Footer from "./Components/Footer/footer";
import "./App.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import Carcard from "./Components/Card/card";
import Nav from "./Components/nav/nav";
import RouteComponent from "./Components/RouteComponent";

const App = () => {
  return (
    <div>
      <Nav />
      <div
        style={{ marginLeft: "35rem", position: "sticky", zIndex: 9999 }}
      ></div>

      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
