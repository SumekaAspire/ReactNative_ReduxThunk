import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../appFeatures/posts/postsSlice";

export const store = configureStore({
    reducer:{
       posts:postsReducer,
    }
})













// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'


// // state contains slice
// //here created a store-  it contains many slice
// export const store =  configureStore({ //inside the function object is there, also reducer is also a object
//     reducer:{
//         counter:counterReducer,

//     }

// })