import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Autorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNfYWRtaW4iOnRydWUsImlzX2RvY3RvciI6ZmFsc2UsImlhdCI6MTYzMzQ4MjIwMSwiZXhwIjoxNjM0MDg3MDAxfQ.A3ZmHl5ExolYhCip2ZvY9HIPu-S2mmVJ4ioN4jE3YjQ"
  },
  "Access-Control-Allow-Credentials": true,
});

export default httpClient;