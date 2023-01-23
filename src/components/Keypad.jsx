

function Keypad() {
  const handleClick = () =>{
    
  }
  return (
    <div id="keypad">
      <div className="grid_container">
        <div className="clear options">AC</div>
        <div className="divide operations">/</div>
        <div className="seven digits">7</div>
        <div className="eight digits">8</div>
        <div className="nine digits">9</div>
        <div className="multiply operations">x</div>
        <div className="four digits">4</div>
        <div className="five digits">5</div>
        <div className="six digits" onClick={handleClick}>6</div>
        <div className="subtract operations">-</div>
        <div className="one digits">1</div>
        <div className="two digits">2</div>
        <div className="three digits">3</div>
        <div className="add operations">+</div>
        <div className="zero digits">0</div>
        <div className="dot options">.</div>
        <div className="equals operations">=</div>
      </div>
    </div>
  )
}

export default Keypad
