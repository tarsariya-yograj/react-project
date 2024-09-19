import axios from "axios";
import {
  CREATE_CAT,
  DELETE_CAT,
  FETCH_CAT,
  GET_CAT,
  UPDATE_CAT,
} from "./CatType";

export const getcat = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:3000/category");
    dispatch({ type: GET_CAT, payload: res.data });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const createCat = (cat) => async (dispatch) => {
  dispatch({
    type: FETCH_CAT,
  });
  try {
    let res = await axios.post("http://localhost:3000/category", cat);
    dispatch({ type: CREATE_CAT, payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCat = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_CAT,
  });
  try {
    let res = await axios.delete(`http://localhost:3000/category/${id}`, id);
    dispatch({ type: DELETE_CAT, payload: id });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateCat = (id, cat) => async (dispatch) => {
  dispatch({
    type: FETCH_CAT,
  });
  try {
    let res = await axios.patch(`http://localhost:3000/category/${id}`, cat);
    dispatch({ type: UPDATE_CAT, payload: res.data });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
