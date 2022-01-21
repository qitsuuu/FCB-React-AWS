import { useState } from "react";
import Task from "./Task";

//this is now a functional component
function Taskslist(){
    const [taskItemList, setTaskItemsList] = useState([
    
        "React Web Development",
        "Nihongo N4 Study",
        "Test Automation",
        "Cookies"
    ]);


const [taskValue, setTaskValue] = useState(""); // to store and update data temporarily
    // console.log("taskValue: ", taskValue);

const inputChangeHandler = (e)=>{
setTaskValue(e.target.value)
};

const addTaskHandler = (e) =>{
    //setTaskItemsList([e.target.value, ...taskItemList]) //spread operator to enumerator all values in the array
    setTaskItemsList([taskValue, ...taskItemList])
    setTaskValue("");
};

    
    //in a codeblock, needs another return statement because we have a callback function (a function) inside.
    //in a codeblock, you can add other logic, functions inside like console.log() ...
        return(
            <div>
            <ul>
                <input
                className="task-input"
                placeholder="Create a new task"
                onChange={inputChangeHandler}
                onBlur={addTaskHandler} // to bind, whenever the focus was removed from the input, this function will be called.
                value ={taskValue} // to set the default to empty.
                />

                 {taskItemList.map((task, index)=>{
    
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

    export default Taskslist;