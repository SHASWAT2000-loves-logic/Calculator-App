// This is where we create the global context provider

// Here all the global states, functions that are used throughout the app are declared and defined

/*
TODO - 
1. for UI/UX, check when the user is entering something invalid and display an error
*/

import Mexp from "math-expression-evaluator";
import { createContext, useState } from "react";

// Creating a new context

const CalculatorContext = new createContext();

// Creating the context provider

export const CalculatorProvider = ({ children }) => {
  // Stores the user input and displays it in the display screen
  const [displayValue, setDisplayValue] = useState("");

  // handles the click event on digits and operations
  const handleClick = (e) => {
    setDisplayValue((prev) => `${prev}${e.target.value}`);
  };

  const removeLastDigit = () => {
    setDisplayValue((prev) => prev.slice(0, -1));
  };

  // handles the event when the user clicks the "=" button to calculate something

  const getAnswer = () => {
    // console.log("here");
    let inputValue = displayValue;
    if (inputValue.includes("x")) {
      inputValue = inputValue.replaceAll("x", "*");
    } else if (inputValue.includes("÷")) {
      inputValue = inputValue.replaceAll("÷", "/");
    }
    const mexp = new Mexp();
    let calculatedResult = mexp.eval(inputValue);
    calculatedResult = Number(calculatedResult);
    if (!Number.isInteger(calculatedResult)) {
      calculatedResult = calculatedResult.toFixed(3) * 1;
    }
    setDisplayValue(calculatedResult.toString());
  };

  // clears the display screen

  const clearDisplay = () => {
    setDisplayValue("");
  };

  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        handleClick,
        getAnswer,
        clearDisplay,
        removeLastDigit,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
