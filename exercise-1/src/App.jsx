import React, { useState } from "react";
function App() {
  const [background, setBackgound] = useState();
  const [title, setTitle] = useState();

  const onSunClick = () =>{
    setBackgound("sunny");
    setTitle("Sunny");
  }
  const onRainClick = () =>{
    setBackgound("rainy");
    setTitle("Rainy");
  }
  return (
    <main className={background}>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
