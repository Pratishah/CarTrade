import { takeLatest } from "redux-saga/effects";
import { handleGetCarDetails, handleGetCars } from "./handlers/car";
import { GET_CAR } from "../redux/carReducer/carReducer";
import { GET_CAR_DETAIL } from "../redux/carReducer/cardetailReducer";

export function* watcherSaga() {
  yield takeLatest(GET_CAR_DETAIL, handleGetCarDetails);
  yield takeLatest(GET_CAR, handleGetCars);
}
