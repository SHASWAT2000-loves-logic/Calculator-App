// This component creates the display screen where the user will see what they have entered and what is the answer to their calculations

import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";
function Display() {
  const {displayValue, error} = useContext(CalculatorContext);
  return (
    <div className="screen">

      {/* if user input is incorrect, then the error is displayed */}

      { error && <div className="alert">
        <span className="error_sign">&#9888;</span>
      </div> }

      {/* this textbox displays the answer */}
      <input type="text" name="calculation" className="display_result" readOnly={true} value={displayValue} placeholder="0"/>
    </div>
  )
}

export default Display
