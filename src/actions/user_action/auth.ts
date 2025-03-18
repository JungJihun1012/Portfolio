import axios from "axios";
import { AUTH_USER } from "../type";

export const auth = () => {
    const request = axios.get("api/get").then((res) => res.data);
    return {
      type: AUTH_USER,
      payload: request
    };
  };