// This component creates the keypad that the user uses to do calculation
// The keypad format can be found in grid-template-areas section of the index.css file


import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";

function Keypad() {
  const {handleClick, disabled,getAnswer, clearDisplay, removeLastDigit} = useContext(CalculatorContext);
  return (
    <div id="keypad">
      <div className="grid_container">

        {/* first row in the calculator */}
        
        <button className="btn clear options" onClick={clearDisplay}>AC</button>
        <button className="btn divide operations" onClick={handleClick} value="÷">÷</button>
        <button className="backspace" onClick={removeLastDigit} disabled={disabled}>⌫</button>


        {/* second row in the calculator */}

        <button className="btn digits" onClick={handleClick} value="7">7</button>
        <button className="btn digits" onClick={handleClick} value="8">8</button>
        <button className="btn digits" onClick={handleClick} value="9">9</button>
        <button className="btn multiply operations" onClick={handleClick} value="x">x</button>

        {/* third row in the calculator */}

        <button className="btn digits" onClick={handleClick} value="4">4</button>
        <button className="btn digits" onClick={handleClick} value="5">5</button>
        <button className="btn digits" onClick={handleClick} value="6">6</button>
        <button className="btn subtract operations" onClick={handleClick} value="-">-</button>

        {/* fourth row in the calculator */}

        <button className="btn digits" onClick={handleClick} value="1">1</button>
        <button className="btn digits" onClick={handleClick} value="2">2</button>
        <button className="btn digits" onClick={handleClick} value="3">3</button>
        <button className="btn add operations" onClick={handleClick} value="+">+</button>

        {/* fifth row in the calculator */}

        <button className="btn zero digits" onClick={handleClick} value="0">0</button>
        <button className="btn dot digits" onClick={handleClick} value={"."}>.</button>
        <button className="btn equals operations" onClick={getAnswer} disabled={disabled}>=</button>
      </div>
    </div>
  )
}

export default Keypad
