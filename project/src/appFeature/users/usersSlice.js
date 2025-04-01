import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1, name:'Balu'},
    {id:2, name:'Akil'},
    {id:3, name:'Ram'}
]

const usersSlice =  createSlice({
 name:'users',
 initialState,
 reducers:{

 }
})


export const selectAllUsers = (state)=> state.users;
export default usersSlice.reducer