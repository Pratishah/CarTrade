import React from "react";
import Footer from "./Components/Footer/footer";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Carcard from "./Components/Card/card";
import Nav from "./Components/nav/nav";
import Searchbox from "./Components/searchbox/searchbox";
import RouteComponent from "./Components/RouteComponent";
import Corousel from "./Components/Corousel/Corousel";

const App = () => {
  return (
    <>
      <Nav />
      <Corousel />
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

{
  /* <Corousel />
      <Searchbox></Searchbox> */
}
