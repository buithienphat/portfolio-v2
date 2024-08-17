import axios from "axios";

export const getCV = async () => {
  try {
    const data = await axios.get("/cv");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
