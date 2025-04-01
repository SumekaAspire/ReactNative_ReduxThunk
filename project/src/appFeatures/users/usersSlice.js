import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const USERS_URL ="https://jsonplaceholder.typicode.com/users"

const initialState=[]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    const response = await axios.get(USERS_URL);
    return response.data
})

const usersSlice =  createSlice({
 name:'users',
 initialState,
 reducers:{},
 extraReducers(builder){
    builder.addCase(fetchUsers.fulfilled,(state, action) =>{
        return action.payload; // completely replace - to avoid duplictes (same occurs many times)
    })
 }
})


export const selectAllUsers = (state)=> state.users;
export default usersSlice.reducer















// import { createSlice } from "@reduxjs/toolkit";

// const initialState=[
//     {id:1, name:'Balu'},
//     {id:2, name:'Akil'},
//     {id:3, name:'Ram'}
// ]

// const usersSlice =  createSlice({
//  name:'users',
//  initialState,
//  reducers:{

//  }
// })


// export const selectAllUsers = (state)=> state.users;
// export default usersSlice.reducer