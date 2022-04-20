import { takeLatest } from "redux-saga/effects";
import { handleGetCars, handleGetSedanCars } from "./handlers/car";
import { GET_CAR, GET_SEDAN_CARS } from "../redux/carReducer/carReducer";

export function* watcherSaga() {
  yield takeLatest(GET_SEDAN_CARS, handleGetSedanCars);
  yield takeLatest(GET_CAR, handleGetCars);
}
