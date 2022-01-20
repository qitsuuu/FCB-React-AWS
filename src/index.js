import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//This is a function-based component and can be reused.
function Task(props){

	console.log(props)
	return(
		<li className="tasks-item">{props.taskName}</li>
	)
}


function Taskslist(){
	return(
		<ul>
				<Task taskName="React Web Development"/>
				<Task taskName="Nihongo N4 Study"/>
				<Task taskName="Test Automation"/>
			</ul>
		
	)
}


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

			<Taskslist/>
			
			</header>
		</div>
	)
}

ReactDOM.render(<App></App>, document.getElementById("root"));