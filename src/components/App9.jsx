import React, { useState } from "react";

export default function App9() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>App9</h1>
      <h2>Assignment</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
