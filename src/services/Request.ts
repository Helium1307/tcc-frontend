import { api } from "./api/index";

export const getRequests = async () => {
  try {
    let response = await api.get("/request");

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
