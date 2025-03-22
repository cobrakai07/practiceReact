import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ num }) {
  // Expensive calculation function
  const computeFactorial = (n) => {
    console.log('Computing factorial...');
    if (n <= 1) return 1;
    return n * computeFactorial(n - 1);
  };

  // Memoize the result of the expensive calculation
  const factorial = useMemo(() => computeFactorial(num), [num]);

  return (
    <div>
      <h1>Factorial of {num} is {factorial}</h1>
    </div>
  );
}

function Memo() {
  const [num, setNum] = useState(1);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setNum(parseInt(input, 10));
  };

  return (
    <div>
      <input type="number" value={input} onChange={handleChange} />
      <button onClick={handleSubmit}>Compute Factorial</button>
      <ExpensiveComponent num={num} />
    </div>
  );
}

export default Memo;

// it saves data in cache, means making every thing saved in memory, results in space cost.
