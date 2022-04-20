import { call, put } from "redux-saga/effects";
import { setcar, setSedancar } from "../../redux/carReducer/carReducer";
import {
  requestGetAllCars,
  requestGetAllSedanCars,
  requestGetCars,
} from "../requests/cars";

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

export function* handleGetSedanCars(action) {
  try {
    const response = yield call(requestGetAllSedanCars);
    const { data } = response;
    console.log("all_cars", data);
    yield put(setSedancar(data));
  } catch (error) {
    console.log(error);
  }
}
