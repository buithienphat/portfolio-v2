"use server";

import { submitForm } from "@/type/type";
import { axiosInstance } from "@/utils/axiosIntance";

export const homeService = {
  getCV: async () => {
    const res = await axiosInstance.get("/cv");
    return res;
  },
};
export const explorerService = {
  getExplorer: async () => await axiosInstance.get("/explorer"),
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
