import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../Models/carDetails";
import { getcar } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";

const Allcars = () => {
  const cars: carDetails[] | null = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.carsState)).user
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcar());
    console.log(cars);
  }, [dispatch]);

  return <div>Allcars</div>;
};

export default Allcars;
