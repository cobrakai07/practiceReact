import { useState } from "react";

interface QuestionViewProps {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  ans: string;
  questionNumber: number;
  numberOfQuestions: number;
  setQuestionNumber: (questionNumber: number) => void;
}

function QuestionView({
  question,
  a,
  b,
  c,
  d,
  ans,
  questionNumber,
  setQuestionNumber,
  numberOfQuestions,
}: QuestionViewProps) {
  const [qno, setQno] = useState<number>(0);
  return (
    <div>
      <div>{question}</div>
      <div>
        <button>{a}</button>
        <button>{b}</button>
        <button>{c}</button>
        <button>{d}</button>
      </div>
      {numberOfQuestions - 1 != qno ? (
        <button
          style={{ backgroundColor: "yellowgreen" }}
          onClick={() => {
            setQuestionNumber(questionNumber + 1);
            setQno((qno) => qno + 1);
          }}
        >
          Next Question
        </button>
      ) : (
        <button style={{ backgroundColor: "red" }}>Submit</button>
      )}
    </div>
  );
}

export default QuestionView;
