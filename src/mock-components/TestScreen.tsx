import { useState } from "react";
import TimerForQuiz from "./TimerForQuiz";
import QuestionView from "./QuestionView";
interface QuestionType {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  ans: string;
}

interface TestScreenProps {
  time: number;
  setTime: (time: number) => void;
  questionSet: QuestionType[];
}

function TestScreen({ time, setTime, questionSet }: TestScreenProps) {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  return (
    <div>
        <TimerForQuiz time={time} setTime={setTime} />
      <div style={{ border: "2px solid" }}>
        {
          <QuestionView
            question={questionSet[questionNumber].question}
            a={questionSet[questionNumber].a}
            b={questionSet[questionNumber].b}
            c={questionSet[questionNumber].c}
            d={questionSet[questionNumber].d}
            ans={questionSet[questionNumber].ans}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            numberOfQuestions={questionSet.length}
          />
        }
      </div>
    </div>
  );
}

export default TestScreen;
