import { url } from "../components/Settings.js";

export const getAllCards = (pageNum) => {
  return fetch(`${url}/cards?page=${pageNum}`).then((res) => res.json());
};
