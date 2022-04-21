import CarTypeComp from "./CarTypeComp";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { carDetails } from "../../Models/carDetails";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";
import Carcard from "../Card/card";

const ViewAllCars = () => {
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
      (car: carDetails) => car.type !== "xyz"
    );
    setMapcars(mapcars);
  }, [cars]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="featuretext featurebox">
        <h1>{"ALL CARS"}</h1>
      </div>

      <div className="buttongroup">
        <div className="flexbtn">
          <div className="btn-group ">
            <Link to="/ViewAllCars" className="btn  active" aria-current="page">
              View all
            </Link>
            <Link to="/SUV" className="btn  active" aria-current="page">
              Suv
            </Link>
            <Link to="/sedan" className="btn">
              Sedan
            </Link>
            <Link to="/hatchback" className="btn ">
              Hatchback
            </Link>

            <Link to="/Allcars" className="viewall">
              Viewall<span>{" >"}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flexstyle flexcardcontainer">
        {mapcars?.map((car: carDetails) => (
          <Carcard key={car.id} carDetail={car} />
        ))}
      </div>
    </div>
  );
};

export default ViewAllCars;
