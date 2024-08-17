import { BASE_URL } from "@/constants/enviroments";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
