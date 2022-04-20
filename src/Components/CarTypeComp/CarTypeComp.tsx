import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { carDetails } from "../../Models/carDetails";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";
import Carcard from "../Card/card";

const CarTypeComp = (props: any) => {
  const [mapcars, setMapcars] = useState<carDetails[]>([]);

  const tofilter = props.ctype as string;

  const cars: carDetails[] = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.carsState)).car
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcar());
  }, [dispatch]);

  useEffect(() => {
    const mapcars: carDetails[] = cars?.filter(
      (car: carDetails) => car.type === props.ctype
    );
    setMapcars(mapcars);
  }, [cars]);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="featuretext featurebox">
        <h1>{props.ctype}</h1>
      </div>

      <div className="buttongroup">
        <div className="flexbtn">
          <div className="btn-group ">
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

export default CarTypeComp;
