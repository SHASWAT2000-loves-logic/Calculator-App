// This is where we create the global context provider

// Here are all the global states, functions that are used throughout the app are declared and defined

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

  // handles the click event on digits (0-9) and operations (+, -, x, ÷)
  const handleClick = (e) => {
    setDisplayValue((prev) => `${prev}${e.target.value}`);
  };

  // handles the event when the backspace button is clicked
  const removeLastDigit = () => {
    setDisplayValue((prev) => prev.slice(0, -1));
  };

  // handles the event when the user clicks the "=" button to calculate the expression on the screen
  // math-expression-calculator package doesn't allow "x" and "÷" in its input expression and will throw an error, so they are replaced

  const getAnswer = () => {
    // storing the input expression
    let inputValue = displayValue;
    // checks for "x" and replaces it with "*"
    if (inputValue.includes("x")) {
      inputValue = inputValue.replaceAll("x", "*");
    }
    // checks for "÷" and replaces it with "/"
    else if (inputValue.includes("÷")) {
      inputValue = inputValue.replaceAll("÷", "/");
    }
    // creating the mexp (math-expression-calculator) object
    const mexp = new Mexp();

    // calculating the result of the input expression
    let calculatedResult = mexp.eval(inputValue);

    // converting the result into number so that we can take care of decimal numbers and trailing zeroes in decimal numbers

    calculatedResult = Number(calculatedResult);

    // checking for numbers that have decimal in it
    if (!Number.isInteger(calculatedResult)) {
      // trim the decimal result to showcase 3 decimal digits and multiplied by 1 to trim insignificant zeroes
      calculatedResult = calculatedResult.toFixed(3) * 1;
    }

    // displaying the final calculated result
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
