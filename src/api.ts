import axios from "axios";
import { API_URL } from "./config";

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}`, { email, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
    try {
      const response = await axios.get(`${API_URL}`, {
        params: {
          email,
          password
        }
      });
      return response.data;
    } catch (error) {
      throw error; 
    }
  };
  