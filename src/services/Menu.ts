import { api } from "./api/index";

export const getMenu = async () => {
  try {
    let response = await api.get("/menu");

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
