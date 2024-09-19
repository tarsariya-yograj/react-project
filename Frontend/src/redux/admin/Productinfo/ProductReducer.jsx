import { CREATE_PRODUCT, DELETE_PRODUCT, FETCHED_PRODUCT, GET_PRODUCT, SINGLE_PRODUCT, UPDATE_PRODUCT } from "./ProductType";

const initialState = {
  products: [],
  product: {},
  isLoding: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
        case GET_PRODUCT:
          return{...state,products:action.payload,isLoding:false}

        case CREATE_PRODUCT:
            return{...state,products:[...state.products,action.payload],isLoding:false}

        case DELETE_PRODUCT:
            return{...state,products:state.products.filter((ele)=>ele.id != action.payload),isLoding:false}

        case SINGLE_PRODUCT:
            return{...state,product:action.payload,isLoding:false}

        case UPDATE_PRODUCT:
            return{...state,products:state.products.map((ele)=>ele.id == action.payload.id? action.payload :ele),isLoding:false}

        case FETCHED_PRODUCT:
            return{...state,isLoding:true}
                 case SINGLE_PRODUCT:
                  return {...state,product:action.payload,isLoding:false}
        default:
          return state
  }
};
