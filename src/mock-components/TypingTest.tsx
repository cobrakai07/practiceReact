import { useEffect, useState } from "react";
import Timer from "./Timer";


function TypingTest(){
    const[speed,setSpeed]=useState<number>(0);
    const[sec,setSec]=useState<number>(0);
    const[min,setMin]=useState<number>(1);
    const[wordCount, setWordCount]=useState<number>(0);
    const[word, setWord]=useState<string>("");

    function calculateWPMSpeed(e:any){
        // alert(`okay${e.key}fine`)
        if(e.key===' ')
            {
                if(word.length>3)
                    {
                        setWordCount((wordCount)=>wordCount+1)
                        setSpeed(()=>wordCount/min);
                        setWord(()=>"");
                    }
                else{
                    setWord(()=>"");
                }
            }
    }

    function calculateWordCount(e: React.ChangeEvent<HTMLTextAreaElement>){
        setWord(e.target.value)
    }
return(
    <>
    <Timer min={min} sec={sec} setMin={setMin} setSec={setSec}/>
    <div style={{display:"flex", justifyContent:"center" , alignItems:"center" ,flexDirection:"column"}}>
        <div>Your Speed: {speed} wpm</div>
        <div>
            <textarea name="" id="" rows={10} onKeyDown={calculateWPMSpeed} onChange={calculateWordCount}></textarea>
        </div>
    </div>
    </>
)
}
export default TypingTest;