import React from "react";
import logo from "./logo.svg";
import Footer from "./Components/Footer/footer";
import "./App.css";
import Corousel from "./Components/Corousel/Corousel";
import { Route, Routes } from "react-router-dom";
import CorouselText from "./Components/corouselText/corouselText";
import Carcard from "./Components/Card/card";
import Nav from "./Components/nav/nav";
import Searchbox from "./Components/searchbox/searchbox";

const App = () => {
  return (
    <>
      <Nav />
      <Footer />
      <Corousel />
      <Footer />
      <Searchbox></Searchbox>
    </>
  );
};

export default App;
