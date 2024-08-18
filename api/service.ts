import { submitForm } from "@/type/type";
import { axiosInstance } from "@/utils/axiosIntance";

export const homeService = {
  getCV: () => axiosInstance.get("/cv"),
};
export const explorerService = {
  getExplorer: () => axiosInstance.get("/explorer"),
};
export const resumeService = {
  getResume: () => axiosInstance.get("/resume"),
};
export const workService = {
  getWork: () => axiosInstance.get("/work"),
};
export const contactService = {
  getInfo: () => axiosInstance.get("/info"),
  subContact: (payload: submitForm) => axiosInstance.post("/contact", payload),
};
