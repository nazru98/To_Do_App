import { createSlice } from "@reduxjs/toolkit";

let initialState={
    productsArr : []
}

const addProductSlice=createSlice({
    name:'addProduct',
    initialState,

    reducers:{
        addProductData:(state,action)=>{
          state.productsArr = action.payload
        },
        deleteProductData:(state,action)=>{
            state.productsArr = state.productsArr.filter(product => product.id !== action.payload)
        }
    }
})

export const {addProductData,deleteProductData} = addProductSlice.actions
export default addProductSlice.reducer
