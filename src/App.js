import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div class="calculator">
  
      <div class="Grid">
          <input type="text" id="display" readonly = "true" />
          <button onclick="appendToDisplay('7')">7</button>
          <button onclick="appendToDisplay('8')">8</button>
          <button onclick="appendToDisplay('9')">9</button>
          <button class="operator" onclick="appendToDisplay('+')">+</button>
          <button onclick="appendToDisplay('6')">6</button>
          <button onclick="appendToDisplay('5')">5</button>
          <button onclick="appendToDisplay('4')">4</button>
          <button class="operator" onclick="appendToDisplay('-')">-</button>
          <button onclick="appendToDisplay('3')">3</button>
          <button onclick="appendToDisplay('2')">2</button>
          <button onclick="appendToDisplay('1')">1</button>
        <button class="operator" onclick="appendToDisplay('*')">*</button>
        <button class="clear" onclick="clearDisplay()">C</button>
        <button onclick="appendToDisplay('0')">0</button>
        <button class="calculate" onclick="calculateResult()">=</button>
        <button class="operator" onclick="appendToDisplay('/')">/</button>
      </div>
    </div>
  );
}

export default App;
