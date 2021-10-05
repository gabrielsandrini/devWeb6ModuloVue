import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  "Access-Control-Allow-Credentials": true,
});

const setTokenOnHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default httpClient;
export { setTokenOnHeader };
