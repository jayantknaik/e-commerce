import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

const cartSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addToCart: (state, action) =>
        {
            
        }
    }
})