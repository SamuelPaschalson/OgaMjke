import axios from "axios";

const prodBaseUrl = "https://api.joysticklabs.io/api/v1";

const headers = {
  "Access-Control-Allow-Origin": true,
  "Access-Control-Allow-Credentials": "include",
  "Content-Type": "application/json; charset=utf-8",
};

const api = axios.create({
  baseURL: prodBaseUrl,
  headers,
  timeout: 60000,
  withCredentials: true,
});

export { api };
