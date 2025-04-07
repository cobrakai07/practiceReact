import React,{useState} from "react";
import "./style.css";

export default function ProgressBar() {
  const[progress,setProgress]=useState(0);
  return (
    <div>
      <div style={{width:200, height:10, backgroundColor:"red"}}>
        <div style={{width:`${progress}%`, height:10, backgroundColor:"cyan"}}></div>
      </div>
      <button onClick={()=>setProgress(progress+10)}>+</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
