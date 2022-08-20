import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const apiClient = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
