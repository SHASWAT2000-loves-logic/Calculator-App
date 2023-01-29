// This is where we create the global context provider

// Here are all the global states, functions that are used throughout the app are declared and defined

import Mexp from "math-expression-evaluator";
import { createContext, useState } from "react";
import toast from "react-hot-toast"; // for error notifications

// Creating a new context

const CalculatorContext = new createContext();

// Creating the context provider

export const CalculatorProvider = ({ children }) => {
  // stores the user input and displays it in the display screen
  const [displayValue, setDisplayValue] = useState("");

  // stores the "disabled" state of the backspace (⌫) and equals to (==) buttons
  // initially both the buttons are disabled
  const [disabled, setDisabled] = useState(true);

  // stores the state of the error notification
  // intially, there is no error
  const [error, setError] = useState(false);

  // handles the click event on digits (0-9) and operations (+, -, x, ÷)
  const handleClick = (e) => {
    setDisplayValue((prevInput) => `${prevInput}${e.target.value}`);

    // displaying the backspace (⌫) and equals to (=) buttons
    setDisabled(false);
  };

  // handles the event when the backspace button is clicked
  const removeLastDigit = () => {
    // check whether the input will be an empty string after deleting its last digit
    if (displayValue.length === 1) {
      // disable backspace (⌫) and equals to (=) buttons when input value is an empty string
      setDisabled(true);
    }

    // deleting the last digit in the input
    setDisplayValue((prevInput) => prevInput.slice(0, -1));
    setError(false);
  };

  // handles the event when the user clicks the "=" button to calculate the expression on the screen
  // math-expression-evaluator package doesn't allow "x" and "÷" in its input expression and will throw an error, so they are replaced with "*" and "/"

  const getAnswer = () => {
    // if there is a successfull calculation without an error
    try {
      // since the math-expression-evaluator doesn't treat "++" and "--" input as incorrect, we check it manually
      // if there is "++" or "--", then we display an error
      if (
        displayValue.indexOf("++") != -1 ||
        displayValue.indexOf("--") != -1
      ) {
        setError(true); //displays the error signal on the screen

        // toast() is used for the error notification and disappears after 4 seconds
        toast("Invalid input! Try something else", {
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
          duration: 4000,
        });
      } else {
        setError(false);
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
        // creating the mexp (math-expression-evaluator) object
        const mexp = new Mexp();

        // calculating the result of the input expression
        let calculatedResult = mexp.eval(inputValue);

        // checking for expressions that are divide by 0
        // math-expression-evaluator evaluates it to Infinity, so we have to manually display an error

        if (calculatedResult == "Infinity") {
          setError(true);
          toast("Invalid input! Cannot divide by 0", {
            style: { borderRadius: "10px", background: "#333", color: "#fff" },
            duration: 4000,
          });
        } else {
          // converting the result into number so that we can take care of decimal numbers and trailing zeroes in decimal numbers

          calculatedResult = Number(calculatedResult);

          // checking for numbers that have decimal in it
          if (!Number.isInteger(calculatedResult)) {
            // trim the decimal result to showcase 3 decimal digits and multiplied by 1 to trim insignificant zeroes in decimal numbers
            calculatedResult = calculatedResult.toFixed(3) * 1;
          }

          // displaying the final calculated result
          setDisplayValue(calculatedResult.toString());
        }
      }
    } catch (err) {
      // if the math expression entered by the user throws an error, we catch it and display an error
      setError(true);
      toast("Invalid input! Try something else", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
        duration: 4000,
      });
    }
  };

  // clears the display screen

  const clearDisplay = () => {
    setDisplayValue("");
    setDisabled(true);
    setError(false);
  };

  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        disabled,
        error,
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
