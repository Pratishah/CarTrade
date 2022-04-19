import { call, put } from "redux-saga/effects";
import { setcar } from "../../redux/carReducer/carReducer";
import { requestGetAllCars, requestGetCars } from "../requests/cars";

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

// export function* handleGetAllCars(action) {
//   try {
//     const response = yield call(requestGetAllCars);
//     const { data } = response;
//     console.log("all_cars", data);
//     yield put(setcar(data));
//   } catch (error) {
//     console.log(error);
//   }
// }
