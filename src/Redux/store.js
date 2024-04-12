
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import productServerReducer from "./reducers/productServerReducer";
const rootReducer=combineReducers({
product:productReducer,
serverData:productServerReducer

})


export default configureStore({
    reducer:rootReducer
})