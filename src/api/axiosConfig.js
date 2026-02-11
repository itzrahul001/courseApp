import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://demo-production-6516.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
