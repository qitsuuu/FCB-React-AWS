//This is a function-based component and can be reused.
function Task(props){

	console.log(props)
	return(
		<li className="tasks-item">{props.taskName}</li>
	)
}

export default Task;