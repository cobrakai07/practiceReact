import React from 'react';
import './style.css';
import { useRef, useState } from 'react';

export default function useRef() {
  const ref = useRef(1);
  ref.current = 20;
  console.log(ref.current);

  const counterRef = useRef(null);
  const [time, setTime] = useState(0);
  let startTimer = () => {
    counterRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  let stopTimer = () => {
    clearInterval(counterRef.current);
    // counterRef.current = null;
  };
  let resetTimer = () => {
    stopTimer();
    setTime(0);
  };
  return (
    <div>
      <div>
        {ref.current}
        {ref.current == 23 && <p>updated</p>}
        <p>Start editing to see some magic happen :)</p>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        {time}
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>reset</button>
      </div>
    </div>
  );
}
