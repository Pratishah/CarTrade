import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../Models/carDetails";
import { getcar, getSedancars } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";
import Carcard from "../Card/card";
import Buttongroup from "../featuredCars/buttongroup";

const Allcars = () => {
  const cars: carDetails[] = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.carsState)).car
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcar());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="buttongroup">
        <Buttongroup />
      </div>
      <div className="flexstyle flexcardcontainer">
        {cars?.map((car: carDetails) => (
          <Carcard key={car.id} carDetail={car} />
        ))}
      </div>
    </div>
  );
};

export default Allcars;
