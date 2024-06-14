import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [A, setA] = useState();
  const [B, setB] = useState();
  const [result, setResult] = useState();
  const [className, setClassName] = useState();
  function onA(ev) {
    setA(+ev.target.value);
  }
  function onB(ev) {
    setB(+ev.target.value);
  }
  function Calculator() {
    setResult(A + B);
    if (isNaN(A) || isNaN(B)) {
      setResult("A and B is shall be numbers !");
      setClassName("error");
    }
    function onResult() {
      setResult(A + B);
    }
  }
  return (
    <main>
      <h1>Calculator</h1>
      <label>A =</label>
      <input onKeyUp={onA} />
      <label>B =</label>
      <input onKeyUp={onB} />
      <label>A + B =</label>
      <input disabled value={result || ""} className={className} />
      <button onClick={Calculator}>Compute</button>
    </main>
  );
}
export default App;
