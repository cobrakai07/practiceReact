import React, { useState, useCallback } from 'react';

function ChildComponent({ onButtonClick }) {
  console.log('Child component rendered');
  return (
    <div>
      <button onClick={onButtonClick}>Increment</button>
    </div>
  );
}

function CallBack() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Memoized callback function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent onButtonClick={increment} />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

export default CallBack;

// the useCallback hook in React is used to memoize functions so that they do not get recreated on every render unless their dependencies change. This is particularly useful when passing callback functions to child components to prevent unnecessary re-renders.

//if we are passing parameters in function we memoized using useCallack, we pass it in useCallBack( parametrs )..like this.