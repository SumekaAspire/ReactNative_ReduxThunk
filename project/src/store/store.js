import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../appFeatures/posts/postsSlice";
import usersReducer from "../appFeatures/users/usersSlice";

export const store = configureStore({ //global state
    reducer:{
       posts:postsReducer,
       users:usersReducer,// after this line, link the id with user and id with title & content
       //options are displayed to the user and selected by them , we link the id
       
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