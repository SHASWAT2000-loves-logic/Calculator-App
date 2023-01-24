// This component creates the display screen where the user will see what they have entered and what is the answer to their calculation

import { useContext } from "react";
import CalculatorContext from "../context/CalculatorContext";
function Display() {
  const {displayValue} = useContext(CalculatorContext);
  return (
    <div>

      {/* this textbox displays the answer */}
      
      <input type="text" name="calculation" className="display" readOnly={true} value={displayValue}/>
    </div>
  )
}

export default Display
