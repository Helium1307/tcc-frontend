import { api } from "./api/index";

export const getEmployees = async () => {
  try {
    let { data } = await api.get("/employee");

    return data;
  } catch (e) {
    console.log(e);
  }
};
