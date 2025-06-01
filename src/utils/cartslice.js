import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();  // Currently removes the last item
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }    
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
