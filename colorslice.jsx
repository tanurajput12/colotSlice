import { createSlice } from "@reduxjs/toolkit";

const colorslice=createSlice({
    name:"colorchange",
    initialState:{
        color:"pink"
    },
    reducers:{
     
        clrchange:(state,action)=>{
        //    console.log(action.payload);
        state.color=action.payload;
        }
    }
})

export default colorslice.reducer;
export const{clrchange}=colorslice.actions;