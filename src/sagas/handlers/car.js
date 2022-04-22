import { call, put } from "redux-saga/effects";
import { setcardetail } from "../../redux/carReducer/cardetailReducer";
import { setcar } from "../../redux/carReducer/carReducer";
import { requestGetcarDetails, requestGetCars } from "../requests/cars";

export function* handleGetCars(action) {
  try {
    const response = yield call(requestGetCars);
    const { data } = response;
    console.log("handler", data);
    yield put(setcar(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetCarDetails(action) {
  try {
    const response = yield call(requestGetcarDetails, action.payload);
    const { data } = response;
    console.log("carDetail", data);
    yield put(setcardetail(data));
  } catch (error) {
    console.log(error);
  }
}
