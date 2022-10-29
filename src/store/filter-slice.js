import { createSlice } from '@reduxjs/toolkit';

const filtSlice = createSlice({
    name: "filter",
    initialState:{
        cuisine: 'american',
        type: 'main course',
        maxCarbs: '400',
        maxProtein: '400',
        maxCalories: '400'
    },
    reducers:{
        submitFilter(state, action){
            let {cuisine ,type , carbs, protein, calories} = action.payload;

            state.cuisine = cuisine;
            state.type = type;
            state.maxCarbs = carbs;
            state.maxProtein = protein;
            state.maxCalories = calories;
        }
    }
})

export const { submitFilter } = filtSlice.actions;
export default filtSlice;