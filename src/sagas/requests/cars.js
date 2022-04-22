import axios from "axios";
import {
  API_URL,
  API_URL_Details,
  API_URL_sedans,
} from "../../constants/constants";
export function requestGetCars() {
  return axios.request({
    method: "get",
    url: API_URL,
    auth: {
      username: "Hasher",

      password: "L#(qc{f}TaJu4%4k",
    },
  });
}

export function requestGetcarDetails(id) {
  return axios.request({
    method: "get",
    url: API_URL_Details + id,
    auth: {
      username: "Hasher",

      password: "L#(qc{f}TaJu4%4k",
    },
  });
}
