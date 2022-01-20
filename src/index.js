import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){
	//an object used for styling
	const paraStyle = {
		"marginBottom":"15px"
	};

	return(
		<div className="app">
			<header className="app-header">
			<h1>Qit's To-Do List</h1>
			<p style={paraStyle}>Take 2, after 3 years</p>

			<ul>
				<li className="tasks-item">React Web Development</li>
				<li className="tasks-item">Nihongo N4 Studies</li>
				<li className="tasks-item">Test Automation</li>
			</ul>
			</header>
		</div>
	)
}

ReactDOM.render(<App></App>, document.getElementById("root"));