import axios from "axios";
import { GET_USER, LOGIN, LOGOUT, SIGNUP } from "./ActionType";

export const getAdmin = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:3000/admin");
    dispatch({ type: GET_USER, payload: res.data });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const signupAdmin = (admin) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:3000/admin", admin);
    dispatch({ type: SIGNUP, payload: res.data });
    localStorage.setItem('admin',JSON.stringify(res.data))
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const loginAdmin = (admin) => {
  return {
    type: LOGIN,
    payload: admin,
  };
};

export const logoutAdmin = () => {
  return {
    type: LOGOUT,
  };
};
