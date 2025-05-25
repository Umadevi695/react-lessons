import React, { useState, useEffect } from "react";

export default function App13() {
  const [num, setNum] = useState(0);
  const [results, setResults] = useState({
    add: 100,
    sub: 100,
    mul: 0,
    div: 0,
  });

  useEffect(() => {
    setResults({
      add: 100 + Number(num),
      sub: 100 - Number(num),
      mul: 100 * Number(num),
      div: Number(num) !== 0 ? (100 / Number(num)).toFixed(2) : "∞",
    });
  }, [num]);

  return (
    <div>
      <h1>App13</h1>
      <h2>Assignment</h2>

      <div>
        <h3>Addition</h3>
        <p>
          100 + {num} = {results.add}
        </p>
      </div>

      <div>
        <h3>Subtraction</h3>
        <p>
          100 - {num} = {results.sub}
        </p>
      </div>

      <p>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </p>

      <div>
        <h3>Multiplication</h3>
        <p>
          100 * {num} = {results.mul}
        </p>
      </div>

      <div>
        <h3>Division</h3>
        <p>
          100 / {num} = {results.div}
        </p>
      </div>
    </div>
  );
}
