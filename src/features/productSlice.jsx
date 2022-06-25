import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const productSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        updateProducts: (state, action) =>
        {
            state.value = action.payload;
        },

        changeQuantity: (state, action) =>
        {
            
        },

        increment: (state, action) =>
        {
            
        },

        decrement: (state, action) =>
        {
            
        }
    }
})

export const { updateProducts, changeQuantity, increment, decrement } = productSlice.actions;
export default productSlice.reducer;