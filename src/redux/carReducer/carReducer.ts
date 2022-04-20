import { carDetails } from "../../Models/carDetails";

export const GET_CAR = "GET_CAR";
export const SET_CAR = "SET_CAR";
export const GET_SEDAN_CARS = "GET_SEDAN_CARS";
export const SET_SEDAN_CARS = "SET_SEDAN_CARS";

export const getcar = () => ({
  type: GET_CAR,
});

export const getSedancars = () => ({
  type: GET_SEDAN_CARS,
});

export const setcar = (car: carDetails[]) => {
  return {
    type: SET_CAR,
    car: car,
  };
};

export const setSedancar = (car: carDetails[]) => {
  return {
    type: GET_SEDAN_CARS,
    car: car,
  };
};

const initialState: carDetails[] = [];

const carReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CAR:
      const { car } = action;
      return { ...state, car };
    default:
      return state;
  }
};
export const SedancarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SEDAN_CARS:
      const { car } = action;
      return { ...state, car };
    default:
      return state;
  }
};
export default carReducer;
