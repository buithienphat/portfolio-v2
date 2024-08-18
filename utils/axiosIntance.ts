import { BASE_URL } from "@/constants/enviroments";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});
