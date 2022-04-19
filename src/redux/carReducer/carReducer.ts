import { carDetails } from "../../Models/carDetails";

export const GET_CAR = "GET_CAR";
export const SET_CAR = "SET_CAR";

export const getcar = () => ({
  type: GET_CAR,
});

export const setcar = (user: carDetails[]) => {
  return {
    type: SET_CAR,
    user: user,
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
export default carReducer;
