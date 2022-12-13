import axios from "axios";

const URL = "http://localhost:3000";
// const URL = "https://swapi.dev/api/";

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
