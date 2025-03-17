import React from 'react';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
