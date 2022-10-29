import { createSlice, current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        dishes: []
    },
    reducers:{

        //add a dish to the dishes array, can't simply use push
        //since can't mutate state directly in reducers
        submitCart: (state, action)=>({
                ...state,
                dishes: [...state.dishes, action.payload]  
        }),

        //delete one of the items from the cart,
        //array is immutable so can't simply use 
        //functions like splice or pop
        deleteCartItem: (state, action)=>({
            ...state,
            dishes: state.dishes.filter(item => item.id != action.payload)
        })
    }
})


export const { submitCart, deleteCartItem } = cartSlice.actions;
export default cartSlice;