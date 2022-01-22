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
const taskItemList = [

	"React Web Development",
	"Nihongo N4 Study",
	"Test Automation",
	"Cookies"
];

//in a codeblock, needs another return statement because we have a callback function (a function) inside.
//in a codeblock, you can add other logic, functions inside like console.log() ...
	return(
		<div>
		<ul>
			<input className="task-input"/>
				{taskItemList.map((task, index)=>{
					console.log(task);

					return <Task key={index} taskName={task}/>
				//it should be pair of a key and value, because each child has to have identification
				})}
			</ul>
			</div> // or use <> </> or called ReactFragment, when you use <div> it will create a new node that can be identified by the browser
			// also you have to adjust the styling
		
	)

	// another way to simplify is this, not in a codeblock.
	// {taskItemList.map(task=> (<Task taskName={task}/>
	// ))}
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