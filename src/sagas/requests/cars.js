import axios from "axios";
import { API_URL } from "../../constants/constants";
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

export function requestGetAllCars() {
  return axios.request({
    method: "get",
    url: API_URL,
    auth: {
      username: "Hasher",

      password: "L#(qc{f}TaJu4%4k",
    },
  });
}
