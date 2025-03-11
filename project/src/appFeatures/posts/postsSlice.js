import {createSlice, nanoid} from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id:'1',
        title:'Learn Redux toolkit',
        content:'It is easy',
        // date is added after created the app 
        date:sub(new Date(), {minutes:10 }).toISOString()
    },
    {
      
        id:'2',
        title:'React Redux',
        content:'React topic',
        date:sub(new Date(), {minutes:5 }).toISOString()
 
    }
]

const postsSlice = createSlice({ //createSlice - background - using immer
    name:'posts',
    initialState,
    reducers:{
    //  postAdded(state, action){
    //     state.push(action.payload) 
    //  }
    // here it is a data structure, better to maintain in slice itself, then take postAdded as object
    postAdded:{
        reducer(state, action){
        state.push(action.payload)
     },
     //prepare is a callback function, here avoid error
     prepare(title, content, userId){ //after dispatch call action comes here,creates payload and return, then reducer goes from prepare, then payload is pushed to state.
         return{
            payload:{
                id:nanoid(),
                title, 
                content,
                date:new Date().toISOString(),
                userId
            }
         }
     }
    }
}

})

//here export actions and reducers

export const selectAllPosts = (state)=> state.posts;// if any changes in future, do changes in slice file only, it automatically upadate.
export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer;
