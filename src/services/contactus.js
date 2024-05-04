import axios from "axios";
let backendUrl =
  import.meta.env.VITE_BACKEND_URL || "https://food-webapp-backend.vercel.app";

const contactusService = async (obj) => {
  try {
    let { data } = await axios.post(`${backendUrl}/email`, obj);
    return data;
  } catch (error) {
    console.error("Error --> ", error);
    throw new Error(error);
  }
};

export { contactusService };
