import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../Models/carDetails";
import { getcar, getSedancars } from "../../redux/carReducer/carReducer";
import { reducerType } from "../../redux/configureStore";

const Allcars = () => {
  const cars: carDetails[] | null = useSelector<reducerType>(
    (state) => JSON.parse(JSON.stringify(state.sedancarsState)).user
  ) as carDetails[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSedancars());
    console.log("from comp", cars);
  }, [dispatch]);

  return <div>Allcars</div>;
};

export default Allcars;
