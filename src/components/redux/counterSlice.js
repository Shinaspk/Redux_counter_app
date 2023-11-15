import {createSlice} from "@reduxjs/toolkit";


 export const counterSlice=createSlice({     //creating slice
    name:"counterAPP",
    initialState:{
        value:0
    },

     //actions are created inside ths reducers key as  objects
    reducers:{
    //logics to update state

//finction to increment number
    increment:(state,action)=>{
        //if its a argumnet function then it can only be accesed by action and value in payload
        state.value+=action.payload
    },
    //function to decrement number
    decrement:(state,action)=>{
        //if its a argumnet function then it can only be accesed by action and value in payload
        state.value-=action.payload

    },
    //function to reset
    reset:(state)=>{
        state.value=0
    }

    }

}) 
//action is required by component inorder to update state
export const{increment,decrement,reset}=counterSlice.actions

//reducer is required to change the state value
export default counterSlice.reducer