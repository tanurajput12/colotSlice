import { useSelector,useDispatch } from "react-redux";
import {  clrchange} from "./colorslice";
import { useState } from "react";
const App=()=>{

const clr=useSelector((state)=>state. changecolor.color)
const dis=useDispatch();
const[myclr,setmyclr]=useState("");

  return(
    <>
    <h1>this app page </h1>

    <br />
<br />
    <input type="text" value={myclr} onChange={(e)=>setmyclr(e.target.value)} />
    <button onClick={()=>{dis(clrchange(myclr))}}>click</button>

    <div style={{height:"200px",width:"300px",background:clr}}></div>
    
    
    </>
  )
}

export default App;