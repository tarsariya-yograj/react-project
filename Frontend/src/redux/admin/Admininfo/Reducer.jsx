// import { json } from "react-router-dom";
import { GET_USER, LOGIN, LOGOUT, SIGNUP } from "./ActionType";

const initialState = {
  admins: [],
  admin: JSON.parse(localStorage.getItem('admin'))||{},
  isLogin: false,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, admins: action.payload, isLogin: false };

    case SIGNUP:
      return {
        ...state,
        admins: [...state.admins, action.payload],
        isLogin: true,
        admin: action.payload,
      };

    case LOGIN:
      let findAdmin = state.admins.find(
        (admin) =>
          admin.username === action.payload.username &&
          admin.password === action.payload.password
      );

      if (findAdmin) {
        localStorage.setItem("admin", JSON.stringify(findAdmin));
        return { ...state, admin: findAdmin, isLogin: true };
      } else {
        alert("no");
        return;
      }

    case LOGOUT:
      localStorage.removeItem("admin");
      return { ...state, admin: "", isLogin: false };

    default:
      return state;
  }
};