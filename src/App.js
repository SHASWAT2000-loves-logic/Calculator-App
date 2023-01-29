// The App component consists of the following components -

// 1. Display
// 2. Keypad

import Keypad from "./components/Keypad";
import Display from "./components/Display";
import { CalculatorProvider } from "./context/CalculatorContext";
import { Toaster } from "react-hot-toast"; // for error notifications
function App() {
  return (
    <CalculatorProvider>
      <div id="calculator">
        <div className="calculator_area">
          <Toaster />
          <Display />
          <Keypad />
        </div>
      </div>
    </CalculatorProvider>
  );
}

export default App;
