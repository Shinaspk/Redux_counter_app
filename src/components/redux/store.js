import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store=configureStore({   //we installed redux toolkit is to create this store 
    //Configurestore method create the store
    ///reducer can only update value of state in store
//reducer key is predefined(its an object which can hold more than one reducer)
reducer:{
    //reducer is coming form counterSlice since we are export reducer  as export default
counter:counterSlice
}
} )
//to create Action file-create Action 
// to create Reducer file -create Reducer
// this method would hav done when they are created stand alone,but now theey atre created seperatly,we create slice componnent 
