import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const initalValue = 0;

  const [value, setValue] = useState(initalValue);

  const handleInc = () => {
    setValue(value + 1);
  };
  const handleDec = () => {
    console.log("i am dec");
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(initalValue);
  };
  return (
    <section className="App">
      <h2> Counter</h2>
      <h3>{value}</h3>
      <button className="btn" onClick={handleDec}>
        decrease
      </button>
      <button className="btn" onClick={handleReset}>
        reset
      </button>
      <button className="btn" onClick={handleInc}>
        increase
      </button>
    </section>
  );
}

export default App;
