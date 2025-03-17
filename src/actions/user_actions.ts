import axios from "axios";
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./type"

export const registerUser = (dataToSubmit: {email: string, password: string}) => {
  return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
      const response = await fetch(`http://localhost:8000/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data.message || 'Register failed');
      }
      dispatch({
        type: REGISTER_USER,
        payload: data
      });
      return data;
    } catch (error) {
      console.error('Error Debuger', error);
      throw error;
    }
  }
}

export const loginUser = (dataToSubmit: {email: string, password: string}) => {
  return async (dispatch: (arg0: {type: string, payload: any}) => void) => {
    try {
      const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application'
        },
        body: JSON.stringify(dataToSubmit),
      });
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      dispatch({
        type: LOGIN_USER,
        payload: data,
      });
    } catch (error) {
      console.error('Login deburging Failed', error);
    };
  };
};

export const auth = () => {
  const request = axios.get("api/get").then((res) => res.data);
  return {
    type: AUTH_USER,
    payload: request
  };
};