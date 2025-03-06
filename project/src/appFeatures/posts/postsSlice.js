import {createSlice} from "@reduxjs/toolkit";


const initialState = [
    {
        id:'1',
        title:'Learn Redux toolkit',
        content:'It is easy'
    },
    {
      
        id:'2',
        title:'React Redux',
        content:'React topic'  
    }
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    }

})


//here export actions and reducers

export const selectAllPosts = (state)=> state.posts;// if any changes in future, do changes in slice file only, it automatically upadate.
export default postsSlice.reducer;
