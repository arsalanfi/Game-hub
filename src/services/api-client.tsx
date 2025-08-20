import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d0267a0604a49f79fb89dc1e5947f64",
  },
});

export default apiClient;
