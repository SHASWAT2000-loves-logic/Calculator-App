// This is where we create the global context provider

// Here all the global states, functions that are used throughout the app are declared and defined

/*
TODO - 
1. check line 24 in this file
2. for UI/UX, check when the user is entering something invalid and display an error
*/

import { createContext, useState } from "react";

// Creating a new context

const CalculatorContext = new createContext();

// Creating the context provider

export const CalculatorProvider = ({ children }) => {
  // Stores the user input and displays it in the textbox
  const [displayValue, setDisplayValue] = useState("");

  // handles the click event on digits and operations
  const handleClick = (e) => {
    setDisplayValue((prev) => `${prev}${e.target.value}`); //maybe not needed. Will check
  };

  // stores the set of all operations that are available in the calculator in an object
  const [operations, setOperations] = useState({
    // possible operatations: "+", "-", "x", "/"
    // check whether the user input is a whole number or a decimal after it is converted to a string
    // operand1 is the number before the operator
    // operand2 is the number after the operator
    // Note - Only binary operations are allowed in this calculator, which means there will be two arguments with an operator between them

    "+": (operand1, operand2) => {
      operand1 = Number.isInteger(operand1)
        ? parseInt(operand1)
        : parseFloat(operand1);
      operand2 = Number.isInteger(operand2)
        ? parseInt(operand2)
        : parseFloat(operand2);
      let answer = operand1 + operand2;
      Number.isInteger(answer)
        ? setDisplayValue(answer)
        : setDisplayValue(answer.toFixed(3));
    },
    "-": (operand1, operand2) => {
      operand1 = Number.isInteger(operand1)
        ? parseInt(operand1)
        : parseFloat(operand1);
      operand2 = Number.isInteger(operand2)
        ? parseInt(operand2)
        : parseFloat(operand2);
      let answer = operand1 - operand2;
      Number.isInteger(answer)
        ? setDisplayValue(answer)
        : setDisplayValue(answer.toFixed(3));
    },
    x: (operand1, operand2) => {
      operand1 = Number.isInteger(operand1)
        ? parseInt(operand1)
        : parseFloat(operand1);
      operand2 = Number.isInteger(operand2)
        ? parseInt(operand2)
        : parseFloat(operand2);
      let answer = operand1 * operand2;
      Number.isInteger(answer)
        ? setDisplayValue(answer)
        : setDisplayValue(answer.toFixed(3));
    },
    "/": (operand1, operand2) => {
      operand1 = Number.isInteger(operand1)
        ? parseInt(operand1)
        : parseFloat(operand1);
      operand2 = Number.isInteger(operand2)
        ? parseInt(operand2)
        : parseFloat(operand2);
      let answer = operand1 / operand2;
      Number.isInteger(answer)
        ? setDisplayValue(answer)
        : setDisplayValue(answer.toFixed(3));
    },
  });

  // handles the event when the user clicks the "=" button to calculate something
  // first the string is converted into an array using split()

  const getAnswer = () => {
    // check whether the operation is addition
    if (displayValue.includes("+")) {
      let argArr = displayValue.split("+");
      doCalculation(argArr, "+");
    }

    // checks whether the operation is subtraction
    else if (displayValue.includes("-")) {
      let argArr = displayValue.split("-");
      doCalculation(argArr, "-");
    }

    // checks whether the operation is multiplication
    else if (displayValue.includes("x")) {
      let argArr = displayValue.split("x");
      doCalculation(argArr, "x");
    }

    // checks whether the operation is division
    else if (displayValue.includes("/")) {
      let argArr = displayValue.split("/");
      doCalculation(argArr, "/");
    }
  };

  // does addition, subtraction, division and multiplication based on the operator passed to this function
  // inputArr is the array we get after "splitting" the string, and contains the two operands

  const doCalculation = (inputArr, operator) => {
    return inputArr.reduce(operations[operator]);
  };

  // clears the display screen

  const clearDisplay = () => {
    setDisplayValue("");
  };
  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        operations,
        handleClick,
        getAnswer,
        clearDisplay,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
export default CalculatorContext;
