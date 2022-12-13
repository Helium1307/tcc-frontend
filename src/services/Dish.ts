import { api } from "./api/index";

export const getDishes = async () => {
  try {
    let response = await api.get("/dish");

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const getDish = async (id: string) => {
  try {
    let { data } = await api.get(`/dish/${id}`);

    return data;
  } catch (e) {
    console.log(e);
  }
};
