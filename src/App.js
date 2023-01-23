import Keypad from "./components/Keypad";
import Display from "./components/Display";
function App() {
  return (
    <div id="calculator">
      <div class="center">
        <Display />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
