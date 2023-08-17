import "./App.css";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import ResultField from "./components/ResultField";

const numbers = [...Array(10).keys()].map((i) => i);
const operators = [
	{ op: "+", classname: "operator" },
	{ op: "-", classname: "operator" },
	{ op: "*", classname: "operator" },
	{ op: "/", classname: "operator" },
	{ op: "=", classname: "calculate" },
	{ op: "C", classname: "clear" },
];

console.log(numbers);
function App() {
	function range(i, x, y) {
		if (i > x && i < y) {
			return i;
		}
	}
	return (

		<div className="calculator">
			<div className="Grid">
				<ResultField/>
				<Numbers numbers={numbers.filter((i) => range(i, 6, 10))} />
				<Operators operator={operators[0]} />
				<Numbers numbers={numbers.filter((i) => range(i, 3, 7))} />
				<Operators operator={operators[1]} />
				<Numbers numbers={numbers.filter((i) => range(i, 0, 4))} />
				<Operators operator={operators[2]} />
				<Operators operator={operators[5]} />
				<Numbers numbers={numbers.filter(i=>i==0)} />
				<Operators operator={operators[4]} />
				<Operators operator={operators[3]} />
			</div>
		</div>
	);
}

export default App;
