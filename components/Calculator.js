// components/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(num1 + num2);
  };

  const handleSubtract = () => {
    setResult(num1 - num2);
  };

  const handleMultiply = () => {
    setResult(num1 * num2);
  };

  const handleDivide = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      alert('Cannot divide by zero!');
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Number 2"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;