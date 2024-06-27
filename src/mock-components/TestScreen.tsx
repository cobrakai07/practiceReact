import Timer from "./Timer"
import TimerForQuiz from "./TimerForQuiz"

interface TestScreenProps {
  time: number
  setTime: (time: number) => void
}

function TestScreen({time, setTime}:TestScreenProps) {
  return (
    <div>
    <TimerForQuiz time={time} setTime={setTime}/>
    </div>
  )
}

export default TestScreen