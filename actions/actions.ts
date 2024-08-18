"use server";

import { axiosInstance } from "@/utils/axiosIntance";

export const getExplorer = async () => {
  const res = await axiosInstance.get("/cv");
  return res;
};

export const getPage = async () => {
  const res = await axiosInstance.get("/page");
  return res;
};
