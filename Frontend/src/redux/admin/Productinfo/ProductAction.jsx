import axios from "axios";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCT,
  GET_PRODUCT,
  SINGLE_PRODUCT,
  UPDATE_PRODUCT,
} from "./ProductType";

export const getProduct = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:3000/product");
    dispatch({ type: GET_PRODUCT, payload: res.data });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getsingleProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`http://localhost:3000/product/${id}`);
    dispatch({ type: SINGLE_PRODUCT, payload: res.data });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = (product) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT,
  });
  try {
    let res = await axios.post("http://localhost:3000/product", product);
    dispatch({ type: CREATE_PRODUCT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT,
  });
  try {
    let res = await axios.delete(`http://localhost:3000/product/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.log(error);
  }
};

// export const updateProduct = (id,pro) => async (dispatch) => {
//   dispatch({
//     type: FETCH_PRODUCT,
//   });
//   try {
//       console.log(pro);
//     let res = await axios.patch(
//       `http://localhost:3000/product/${id}`,
//       pro
//     );
//     console.log(res.data);
//     dispatch({ type: UPDATE_PRODUCT, payload: res.data });

//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateProduct = (pro) => async (dispatch) => {
  dispatch({
    type: FETCH_PRODUCT,
  });
  try {
    let res = await axios.patch(`http://localhost:3000/product/${pro.id}`, pro);
    console.log(res.data);
    dispatch({ type: UPDATE_PRODUCT, payload: pro });
  } catch (error) {
    console.log(error);
  }
};
