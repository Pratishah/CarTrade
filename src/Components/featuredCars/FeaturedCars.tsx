import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { carDetails } from "../../Models/carDetails";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";
import Carcard from "../Card/card";
import Buttongroup from "./buttongroup";
import "./FeaturedCars.scss";

const FeaturedCars = () => {
  const [mapcars, setMapcars] = useState<carDetails[]>([]);

  const cars: carDetails[] = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.carsState)).car
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcar());
  }, [dispatch]);

  useEffect(() => {
    const mapcars: carDetails[] = cars?.filter(
      (car: carDetails) => car.type === "sedan"
    );
    setMapcars(mapcars);
  }, [cars]);

  return (
    <div style={{ backgroundColor: "white" }} className="boxfeature">
      <div className="featuretext featurebox">
        <h1>Featured Cars</h1>
      </div>

      <div className="buttongroup">
        <Buttongroup />
      </div>
      <div className="flexstyle flexcardcontainer">
        {mapcars?.map((car: carDetails) => (
          <Carcard key={car.id} carDetail={car} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
