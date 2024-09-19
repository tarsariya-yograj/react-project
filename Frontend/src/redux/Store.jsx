import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { adminReducer } from "./admin/Admininfo/Reducer";
import { thunk } from "redux-thunk";
import { catReducer } from "./admin/Categoryinfo/CatReducer";
import { productReducer } from "./admin/Productinfo/ProductReducer";

const combineAllReducers = combineReducers({
    admins:adminReducer,
    category:catReducer,
    pros:productReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = legacy_createStore(
    combineAllReducers,
    composeEnhancers(applyMiddleware(thunk))
);