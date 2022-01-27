import axios from "axios";
import Router from "next/router";
export const URL = process.env.API_URL || "http://localhost:3001";

const instance = axios.create({
  baseURL: URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    //redirect unauthorized user to login page, uncomment later
    // const statusCode = error?.response?.status;
    // if (statusCode === 401) Router.push("/login");

    //get a userId cookie for debugging and retry, comment this out later
    await instance.get("/login/debug");
    const previousRequest = error.config;
    return previousRequest ? instance.request(previousRequest) : undefined;
  }
);

export default instance;
