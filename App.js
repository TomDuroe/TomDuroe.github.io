import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  const [operationDisplay, setOperationDisplay] = useState(0);
  const setDisplayWithEvent = (event) => {
    let newDisplay = display + event.target.value;
    setDisplay(newDisplay);
  };
  const operatorClicked = (event) => {
    let lastOperator = event.target.value;
    let inputtedValue = display;
    setOperationDisplay(operationDisplay + lastOperator + inputtedValue);
    setDisplay("");
  };
  const equalClicked = (event) => {
    let result = eval(operationDisplay);
    setDisplay(result);
  };
  return (
    <div className="App">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(function (number) {
        return (
          <button key={number} value={number} onClick={setDisplayWithEvent}>
            {number}
          </button>
        );
      })}
      <button value="+" onClick={operatorClicked}>
        +
      </button>
      <button value="/" onClick={operatorClicked}>
        /
      </button>
      <button value="=" onClick={equalClicked}>
        =
      </button>

      <br />
      <input type="text" value={display}></input>
      <br />
      <span>{operationDisplay}</span>
    </div>
  );
}

export default App;