import { configureStore } from "@reduxjs/toolkit";
import colorslice from "./colorslice";
const store=configureStore({
    reducer:{
     changecolor:colorslice,
    }
})

export default store;