import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App19() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [message, setMessage] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    if (wicket >= 10) {
      setMessage("Game Over!");
    }
  }, [wicket]);

  const handleRun = () => {
    if (wicket < 10) {
      setRun(run + 1);
      setMessage("Well Done!");
    }
  };

  const handleWicket = () => {
    if (wicket < 10) {
      setWicket(wicket + 1);
      setMessage("Better Luck Next Time!");
    }
  };
  const navToApp1 = () => {
    Navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Cricket Scoreboard</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          margin: "30px",
        }}
      >
        <div>
          <h3>{run}</h3>
          <button onClick={handleRun}>Run</button>
          <h3>{wicket}</h3>
          <button onClick={handleWicket}>Wicket</button>
        </div>

        <div>
          <h3>{message}</h3>
        </div>
      </div>
      <p>
        <button onClick={navToApp1}>Go to App1</button>
      </p>
    </div>
  );
}

export default App19;
