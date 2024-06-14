import React from "react";
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  function onInput(e) {
    setText(e.target.value);
  }
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input onChange={onInput} />
      <p>
        <label>Here is the text in upper case</label>
        <input disabled value={text.toUpperCase()} />
      </p>
    </main>
  );
}
export default App;
