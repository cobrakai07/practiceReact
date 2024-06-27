import { useState } from "react";
import TestScreen from "./TestScreen";

interface QuestionType{
    question: string,
    a: string,
    b: string,
    c: string,
    d: string,
    ans: string,

}
function Quiz() {

  const questionSet:QuestionType[] = [
    {
      question: "What is your name?",
      a: "Ram",
      b: "shyam",
      c: "Gyan",
      d: "Jam",
      ans: "a",
    },
    {
        question: "What is your aim?",
      a: "Ramayan",
      b: "sham-e-gham",
      c: "Gyan dena",
      d: "Jam peena",
      ans: "b",
    },
    {
        question: "What is your game?",
      a: "Ram",
      b: "shyam",
      c: "Gyan",
      d: "Jam",
      ans: "c",
    },
  ];
  const [time, setTime] = useState<number>(-1);
  function startTestFun() {
    setInterval(() => {
      setTime((time) => {
        if (time === 60) return 0;
        else return time + 1;
      });
    }, 1000);
  }
  return (
    <div>
      <h3>Welcome to Test</h3>

      {time>=0&&<TestScreen time={time} setTime={setTime} questionSet={questionSet}/>}
      {time==-1&&<button onClick={startTestFun}>Start Test</button>}
    </div>
  );
}

export default Quiz;
