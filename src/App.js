import { useState } from "react";
import "./App.css";

function App() {
  // this will store what user is typing (like 2+2)
  const [currentInput, setCurrentInput] = useState("");

  // this will store the final answer (like 4)
  const [result, setResult] = useState("");

  // function to handle numbers and operators
  const handleButtonClick = (value) => {
    // add the button text to input
    setCurrentInput((prev) => prev + value);
  };

  // clear everything
  const handleClear = () => {
    setCurrentInput("");
    setResult("");
  };

  // delete last character
  const handleDelete = () => {
    setCurrentInput((prev) => prev.slice(0, -1));
  };

  // calculate answer when "=" pressed
  const handleEqual = () => {
    try {
      // eval is not best for real apps, but works for simple calculator
      setResult(eval(currentInput).toString());
    } catch {
      // if something is wrong (like "5++2"), show error
      setResult("Error");
    }
  };

  return (
    <div className="app">
      <h1>Calculator</h1>

      <div className="calculator-body">
        {/* display area */}
        <div className="display-screen">
          <div className="display-expression">{currentInput || "0"}</div>
          <div className="display-result">{result}</div>
        </div>

        {/* all buttons */}
        <div className="button-pad">
          <div className="row">
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
          </div>
          <div className="row">
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleClear}>Clear</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
          </div>
          <div className="row-last">
            <button className="button-equal" onClick={handleEqual}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
