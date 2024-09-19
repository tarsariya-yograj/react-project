import { CREATE_CAT, DELETE_CAT, FETCH_CAT, GET_CAT, SINGLE_CAT, UPDATE_CAT } from "./CatType";

const initialState ={
    cats:[],
    cat:'',
    isLoading:false
}

export const catReducer =(state=initialState,action)=>{
    switch (action.type) {
        case GET_CAT:
            return{...state,cats:action.payload,isLoading:false}

        case CREATE_CAT:
            return{...state,cats:[...state.cats,action.payload],isLoading:false}

        case DELETE_CAT:
            return{...state,cats:state.cats.filter((ele)=>ele.id !=action.payload),isLoading:false}

        case SINGLE_CAT:
            return{...state,cat:action.payload, isLoading:false}

        case UPDATE_CAT:
            return{...state,cats:state.cats.map((ele)=>ele.id == action.payload.id ? action.payload :ele),isLoading:false}

        case FETCH_CAT:
            return{...state, isLoading:true}
            
        default:
            return state
    }
}