import axios from "axios";

const BASE_URL = import.meta.env.VITE_BAES_API;

export default axios.create({
  baseURL: BASE_URL,
});
