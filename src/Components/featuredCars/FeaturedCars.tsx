import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../Models/carDetails";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";
import Carcard from "../Card/card";
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
    <div className="container flexcardcontainer">
      <h1>featured</h1>
      <div className="flexstyle">
        {mapcars?.map((car: carDetails) => (
          <Carcard key={car.id} carDetail={car} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCars;
