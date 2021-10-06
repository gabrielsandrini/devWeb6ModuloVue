import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNfYWRtaW4iOnRydWUsImlzX2RvY3RvciI6ZmFsc2UsImlhdCI6MTYzMzQ5NzM3NiwiZXhwIjoxNjM0MTAyMTc2fQ.ywwO03H5xfvB0WNClToYLeW6nNgnh7fUOq4U1EeymmY",
    //LETICIA "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNfYWRtaW4iOnRydWUsImlzX2RvY3RvciI6ZmFsc2UsImlhdCI6MTYzMzQ4MjIwMSwiZXhwIjoxNjM0MDg3MDAxfQ.A3ZmHl5ExolYhCip2ZvY9HIPu-S2mmVJ4ioN4jE3YjQ"
  },
  "Access-Control-Allow-Credentials": true,
});

export default httpClient;