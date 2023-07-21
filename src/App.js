// App.jsx
import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      {count >= 10 && <p className="warning">Count is too high!</p>}
      <div className="buttons">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Counter />
    </div>
  );
}

export default App;
