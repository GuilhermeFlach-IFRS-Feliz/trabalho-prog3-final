import axios from "axios";
export const URL = process.env.API_URL || "http://localhost:3001";

const instance = axios.create({
  baseURL: URL,
});

export default instance;
