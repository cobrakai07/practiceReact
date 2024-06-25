import { useEffect, useState } from "react";

interface ReviewComponentProps {
  one :number;
  two :number;
  three :number;
  four :number;
  five :number;
  count:number;
}
const ReviewComponent = ({one,two,three,four,five,count}:ReviewComponentProps) => {
  const [avg, setAvg] = useState<number>((one+two+three+four+five)/5);
  useEffect(()=>{
    if(count>0)
      setAvg(((one*1)+(two*2)+(three*3)+(four*4)+(five*5))/count);
    else
      setAvg(0);  
  },[one,two,three,four,five])
  return (
    <div>
      <div>Average Rating: {avg}</div>
      <div>one:{one}</div>
      <div>two:{two}</div>
      <div>three:{three}</div>
      <div>four:{four}</div>
      <div>five:{five}</div>
    </div>
  )
}

export default ReviewComponent