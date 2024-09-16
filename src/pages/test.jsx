import { useState,useEffect,useRef } from "react";

export default function Test(){
        



const [Rerender,setRerender] = useState()

useEffect(()=>{
        console.log("rendered")
},[Rerender])
const ReRender = () =>{
         setRerender(false)
}





    return(
        <>     
      <button onClick={ReRender}>Rerender</button>
        </>
    )
}