import axios from "axios";

export const axiosConstructor = axios.create({
  baseURL: "/assets/data.json",
  headers: {
    "Content-Type": "application/json",
  },
});