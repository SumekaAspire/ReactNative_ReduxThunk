import {creatSlice} from "@reduxjs/toolkit";


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

const postsSlice = creatSlice({
    name:'posts',
    initialState,
    reducers:{

    }

})


//here export actions and reducers

export default postsSlice.reducer;
