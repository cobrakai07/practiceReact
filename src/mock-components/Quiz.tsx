import { useState } from "react"
import TestScreen from "./TestScreen"

function Quiz() {
    const[time,setTime]=useState<number>(0);
    function startTestFun(){
        setInterval(()=>{
            if(time>=3)
                setTime(0);
            else
                setTime(time=>time+1);
        },1000)
        
    }
  return (
    <div>
        <h3>Welcome to Test</h3>

        <TestScreen time={time} setTime={setTime}/>
        <button onClick={startTestFun}>Start Test</button>
    </div>
  )
}

export default Quiz