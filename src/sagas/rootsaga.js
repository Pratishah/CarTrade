import { takeLatest } from "redux-saga/effects";
import { handleGetCars } from "./handlers/car";
import { GET_CAR } from "../redux/carReducer/carReducer";

export function* watcherSaga() {
  yield takeLatest(GET_CAR, handleGetCars);
}
