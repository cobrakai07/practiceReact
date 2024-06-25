import { useState } from "react";
import ReviewComponent from "./ReviewComponent";

function GiveStarReview() {
    const [count, setCount] = useState<number>(0);
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);
    const [three, setThree] = useState(0);
    const [four, setFour] = useState(0);
    const [five, setFive] = useState(0);

  return (
    <div style={{display:"flex" , flexDirection:"column", alignItems:"center", justifyContent:"center", border:"2px solid red"}}>
        <div>Give rating</div>
        <div>
            <button onClick={()=>{setOne(one+1);setCount(count=>count+1)}}>1</button>
            <button onClick={()=>{setTwo(two+1);setCount(count=>count+1)}}>2</button>
            <button onClick={()=>{setThree(three+1);setCount(count=>count+1)}}>3</button>
            <button onClick={()=>{setFour(four+1);setCount(count=>count+1)}}>4</button>
            <button onClick={()=>{setFive(five+1);setCount(count=>count+1)}}>5</button>
        </div>
        <div>
            <ReviewComponent one={one} two={two} three={three} four={four} five={five} count={count}/>
        </div>
    </div>
  )
}

export default GiveStarReview