import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 15;
  const addValue = () => {
    if (counter == 20) return;
    counter = counter + 1;
    setCounter(counter);
    console.log("Add Value Clicked!!", Math.random(), "counterVal:", counter);
  };
  const remValue = () => {
    if (counter == 0) return;
    counter = counter - 1;
    console.log(
      "Remove Value Clicked!!",
      Math.random(),
      "counterVal:",
      counter
    );
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={remValue}>Remove Value</button>
      <p>The final value of the counter is {counter}</p>
    </>
  );
}

export default App;
