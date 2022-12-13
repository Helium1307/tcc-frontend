import { api } from "./api/index";

export const getIngredients = async () => {
  try {
    let response = await api.get("/ingredient");

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
