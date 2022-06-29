import { createSlice } from "@reduxjs/toolkit";

export const Users = createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{
        create:(state=[],action)=>{
            state.user = action.payload;
            
            // localStorage.setItem('user', JSON.stringify(action.payload))
        },
        deposit:(state,action)=>{
            state.user = action.payload;
        }
        // logout:(state)=>{
        //     state.user = null;
        //     // localStorage.removeItem('user')
    
        // },
        // addIncome:(state,action)=>{
        //     state.user= action.payload
            
        // },
        // addExpense:(state,action)=>{
        //     state.user=action.payload
        // }
       
    }
})

export const {create,deposit} = Users.actions;

export const selectUser = (state)=> state.user.user;

export default Users.reducer