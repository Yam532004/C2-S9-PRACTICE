import React, { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setisRaining] = useState(false);
  const [title, setTitle] = useState("Hello");
  const [background, setBackground] = useState();
  // const [background, setBackground] = useState()
  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setisRaining(false);
    getTitle()
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setisRaining(true);
    getTitle()
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    if (isRaining) {
      setTitle("RAIN TIME");
      getBackgroundColor()
    } else {
      setTitle("SUN TIME");
      getBackgroundColor()
    }
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
    if (isRaining) {
      setBackground("rainy")
    } else {
      setBackground("sunny");
    }
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
