import { useState } from 'react';

// Task 2: State Management
// Create a component named `Counter` that displays a count value.
// Include two buttons: one to increment the count and one to decrement it.
// Use the `useState` hook to manage the count state.
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const buttonStyle = {
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    backgroundColor: '#e0e0e0',
    cursor: 'pointer',
    transition: 'background-color 0.25s, border-color 0.25s',
    marginRight: '10px',
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={buttonStyle}>Increment</button>
      <button onClick={decrement} style={{ ...buttonStyle, marginRight: '0' }}>Decrement</button>
    </div>
  );
};

export default Counter;
