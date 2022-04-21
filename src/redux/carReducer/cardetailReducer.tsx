import { CarDetail } from "../../Models/CarDescription";

export const GET_CAR_DETAIL = "GET_CAR_DETAIL";
export const SET_CAR_DETAIL = "SET_CAR_DETAIL";

export const getcardetail = (id: any) => ({
  type: GET_CAR_DETAIL,
  payload: id,
});

export const setcardetail = (data: CarDetail) => {
  return {
    type: SET_CAR_DETAIL,
    data: data,
  };
};

const carDetailReducer = (state = null, action: any) => {
  switch (action.type) {
    case SET_CAR_DETAIL:
      console.log(action);
      const { data } = action;
      return { data };
    default:
      return state;
  }
};

export default carDetailReducer;
