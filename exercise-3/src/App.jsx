import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = useState();
  const [B, setB] = useState();
  const [result, setResult] = useState();
  /* You will need some function to handle the key pressed and button events */
function onA(ev) {
  setA(+ev.target.value);
}
function onB(ev) {
  setB(+ev.target.value);
}
function Calculator() {
  /* You will need a function to calculate the sum of the 2 numbers */
  setResult( A + B);
  /* You will need a function to handle the error message */
  
  /* You will need a function to display the result */
}
  return (
    <main>
      <h1>Calculator</h1>
      <label>A =</label>
      <input onKeyUp={onA}  />
      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={result || ""} />
      <button onClick={Calculator}>Compute</button>
    </main>
  );
}

export default App;
