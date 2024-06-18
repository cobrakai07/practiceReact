interface timerProps{
    sec:number,
    min:number,
    setSec:  React.Dispatch<React.SetStateAction<number>>
    setMin: React.Dispatch<React.SetStateAction<number>>
}
function Timer({sec,min,setMin,setSec}:timerProps){
    
    
   
    function startTimer(){
        setInterval(()=>{
            setSec(sec=>sec+1);
        },1000)
        setInterval(()=>{
            setMin(min=>min+1);
        },1000*60)
    }
    return(
        <>
            <div style={{backgroundColor:"cyan", textAlign:"center"}}>
                {min}:{sec}
            </div>
            <button onClick={startTimer}>Start Test</button>
        </>
    )
}
export default Timer;