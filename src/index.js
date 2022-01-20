import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(){
	return(
		<div className="app">
			<header className="app-header">
			<h1>Qit's To-Do List</h1>
			<p>Take 2, after 3 years</p>
			</header>
		</div>
	)
}

ReactDOM.render(<App></App>, document.getElementById("root"));