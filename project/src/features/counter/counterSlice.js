import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}


export const counterSlice = createSlice({// in createslice method, we pass object
    name: 'counter',
    initialState ,
    reducers:{
        increment: (state) =>{
            state.count+= 1;
        },
        decrement:(state)=>{
            state.count-= 1;
        },
        reset:(state)=>{
            state.count =0;
        },
        incrementByAmount:(state, action )=>{
            state.count += action.payload;
        }

    }
})


//export actions and reducers
export const {increment, decrement,reset, incrementByAmount}= counterSlice.actions;

export default counterSlice.reducer;

