import { useState } from "react";
import "./App.css";

function App() {
  // The variable is pr
  // operly declared here
  // let counter = 15;

  let [counter, setcounter] = useState(15);

  const addValue = () => {
    // This logs to the console and adds 1 to the variable behind the scenes
    counter = counter + 1;
    console.log("clicked", counter);
    setcounter(counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      console.log("Clicked", counter);
      setcounter(counter);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      {/* We will leave this button blank for now, just like in the video */}
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
