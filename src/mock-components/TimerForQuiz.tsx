interface PropsForTimerForQuiz{
    time: number
    setTime: (time: number) => void
    
}

function TimerForQuiz({time, setTime}:PropsForTimerForQuiz) {
  return (
    <div>TimerForQuiz: {time}</div>
  )
}

export default TimerForQuiz;