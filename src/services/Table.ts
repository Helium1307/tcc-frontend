import { api } from "../services/api/index";

export const getTables = async () => {
  try {
    let { data } = await api.get("/table");

    return data;
  } catch (e) {
    console.log(e);
  }
};
