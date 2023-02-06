// This is where we create the global context provider

// Here are all the global states, functions that are used throughout the app are declared and defined

import Mexp from "math-expression-evaluator";
import { createContext, useState } from "react";
import toast from "react-hot-toast"; // for error notifications

// Creating a new context

const CalculatorContext = new createContext();

// Creating the context provider

export const CalculatorProvider = ({ children }) => {
  // stores the user input and displays it on the display screen
  // initially nothing is displayed apart from the placeholder value
  const [displayValue, setDisplayValue] = useState("");

  // used to disable digits (0-9) when user has entered more than 10 digits
  const [disabled, setDisabled] = useState(false);

  // stores the length of a number. Maximum 10 digits are allowed in a number
  const [digitLength, setDigitLength] = useState(0);

  // stores the state of the error notification
  // intially, there is no error sign
  const [error, setError] = useState(false);

  // handles the click event on digits (0-9) and operations (+, -, x, ÷)
  const handleMath = (e) => {
    // to make sure user input looks like "6667" instead of "00006667"
    if (displayValue == "0") {
      setDisplayValue(`${e.target.value}`);
    } else {
      // if the user input is a digit, we first check whether the length of the number is less than 10 or not
      if (
        e.target.value != "+" &&
        e.target.value != "-" &&
        e.target.value != "x" &&
        e.target.value != "÷"
      ) {
        // if the length of the number is greater than 10, we display an error notification and disable the digits from 0 to 9
        if (digitLength > 9) {
          //display error
          setError(true);
          //disable digits button
          setDisabled(true);
          // display error notification
          toast("Cannot enter more than 10 digits for a number", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            duration: 3000,
          });
        }
        // if the length of the number is less than 10
        else {
          // increase the length of the number by 1
          setDigitLength((prevLength) => prevLength + 1);
          setDisplayValue((prevInput) => `${prevInput}${e.target.value}`);
          setError(false);
          setDisabled(false);
        }
      }
      // if the user input wasn't a digit, then the length of the number becomes 0 as we start counting again from 0 for the new number
      else {
        setDigitLength(0);
        setDisplayValue((prevInput) => `${prevInput}${e.target.value}`);
        setError(false);
        setDisabled(false);
      }
    }
  };

  // handles the event when the backspace button is clicked
  const removeLastDigit = () => {
    // if the last character in the string was a digit, then we reduce the length of the number by 1
    if (
      displayValue.charAt(displayValue.length - 1) != "+" &&
      displayValue.charAt(displayValue.length - 1) != "-" &&
      displayValue.charAt(displayValue.length - 1) != "x" &&
      displayValue.charAt(displayValue.length - 1) != "÷"
    ) {
      // removing the last character from the input
      setDisplayValue((prevInput) => prevInput.slice(0, -1));

      // makes sure that the length of the number doesn't become less than 0
      // stop after the length of the number has become 0
      if (digitLength != 0) {
        setDigitLength((prevLength) => prevLength - 1);
      }
      // disable all errors
      setError(false);
      setDisabled(false);
    }
    // if the last character in the string is a math operator or decimal
    // length of the calculated number is determined after removing all math operations
    else {
      // removes the last character from the user input
      setDisplayValue((prevInput) => prevInput.slice(0, -1));

      let inputNumber = displayValue;
      // removes all "+" from user input
      inputNumber = inputNumber.replaceAll("+", "");
      // removes all "*" from user input
      inputNumber = inputNumber.replaceAll("*", "");
      // removes all "-" from user input
      inputNumber = inputNumber.replaceAll("-", "");
      // removes all "÷" from user input
      inputNumber = inputNumber.replaceAll("÷", "");

      // after removing all math operators, we find the actual length of the number
      setDigitLength(inputNumber.length);
      setError(false);
      setDisabled(false);
    }
  };

  // handles the event when the user clicks the "=" button to calculate the expression on the screen
  // math-expression-evaluator package doesn't allow "x" and "÷" in its input expression and will throw an error, so they are replaced with "*" and "/"

  const getAnswer = () => {
    // if there is a successfull calculation without an error
    try {
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
        // show error sign
        setError(true);
        // show error notification for 3 seconds
        toast("Invalid input! Cannot divide by 0", {
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
          duration: 3000,
        });
      } else {
        // converting the result into number so that we can take care of decimal numbers and trailing zeroes in decimal numbers

        calculatedResult = Number(calculatedResult);

        // checking for numbers that have decimal in it
        if (!Number.isInteger(calculatedResult)) {
          // trim the decimal result to showcase 3 decimal digits and multiplied by 1 to trim insignificant zeroes in decimal numbers
          calculatedResult = calculatedResult.toFixed(3) * 1;
        }

        // if the length of the resultant calculation is greater than 10 digits, we round it off to 10 digits
        // calculated result is a number, so we convert it into a string for it to be displayed on the screen
        if (calculatedResult.toString().length > 10) {
          calculatedResult = Math.round(calculatedResult);
          setDisplayValue(calculatedResult.toString());
        }
        // if the length of the resultant calculation is less than 10 digits
        else {
          setDisplayValue(calculatedResult.toString());
        }

        // to store the length of the calculated result, we remove "-" from the answer
        calculatedResult = calculatedResult.toString();
        calculatedResult = calculatedResult.replace("-", "");
        setDigitLength(calculatedResult.length);
      }
    } catch (err) {
      // if the math expression entered by the user throws an error, we catch it and display an error
      // error is shown only if there is some user input
      // in case of no input, no action is taken
      if (displayValue.length != 0) {
        // show error sign
        setError(true);
        // show error notification with a message for 3 seconds
        toast("Invalid input! Try something else", {
          style: { borderRadius: "10px", background: "#333", color: "#fff" },
          duration: 3000,
        });
      }
    }
  };

  // clears the display screen

  const clearDisplay = () => {
    setDisplayValue("");
    setError(false);
    setDigitLength(0);
    setDisabled(false);
  };

  return (
    <CalculatorContext.Provider
      value={{
        displayValue,
        disabled,
        error,
        handleMath,
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
