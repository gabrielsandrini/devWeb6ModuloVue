import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNfYWRtaW4iOnRydWUsImlzX2RvY3RvciI6ZmFsc2UsImlhdCI6MTYzMzU1ODMzOCwiZXhwIjoxNjM0MTYzMTM4fQ.fXVlVCNdy8Figf0kkMrVzM9LmpHXfIWtJBDCDJfPXR4"
  },
  "Access-Control-Allow-Credentials": true,
});

export default httpClient;