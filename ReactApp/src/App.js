import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculateSum = async () => {
    const response = await fetch("https://localhost:5001/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Num1: Number(num1), Num2: Number(num2) })
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <p>Sum: {result}</p>
    </div>
  );
}

export default App;
