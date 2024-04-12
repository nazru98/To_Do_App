import { createSlice } from "@reduxjs/toolkit";

let initialState={
    productsData : [],
    isAdded:false

}

const addProductSliceServer=createSlice({
    name:'addProduct',
    initialState,
    reducers:{
        addProductDataServer:(state,action)=>{
          state.productsData = action.payload
          state.isAdded=true
        },
        deleteProductDataSerer:(state,action)=>{
            state.productsData = state.productsData.filter(product => product.id !== action.payload)
            state.isAdded=true
        },
        editProductDataServer: (state, action) => {
            const { id } = action.payload;
            console.log(id,'id');
            const index = state.productsData.findIndex(product => product.id === id);
            if (index !== -1) {
              state.productsData[index] = action.payload;
              state.isAdded=true
            }
          },
    }
})

export const {addProductDataServer,deleteProductDataSerer,editProductDataServer} = addProductSliceServer.actions
export default addProductSliceServer.reducer
