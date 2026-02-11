import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://demo-production-a20fd.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
