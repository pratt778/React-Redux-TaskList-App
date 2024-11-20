import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {

  let dispatch = useDispatch()

  const [taskname, setTaskName]=useState("")
  const [taskpriority, setTaskPriority] = useState("")
  const handleTask = () => {
    console.log("clicked");
    let addtask = document.getElementById("addtask");
    addtask.classList.toggle("active");
  };
  const handlepriority=(e)=>{
    console.log(e.target.innerHTML)
    setTaskPriority(e.target.innerHTML)
  }

  const handleTodoTask=()=>{
    console.log(taskname)
    console.log(taskpriority)
    dispatch({type:"Add",payload:{
      taskname:taskname,
      priority:taskpriority
    }})
    setTaskName("")

  }
  return (
    <>
      <div id="addtask">
        <div className="addtask-cont">
          <div className="a-head">
            <h1>Add Task</h1>
            <button className="btn-addtask" onClick={handleTask}>
              <span>X</span>
            </button>
          </div>
          <div className="taskbox-cont">
            <span id="task-title">
              Task
            </span>
            <input type="text" className="task-name"
            placeholder="type your todo task"
            value={taskname} onChange={(e)=>setTaskName(e.target.value)} />
          </div>

          <div className="prior-cont">
            <span id="task-title">
              Priority
            </span>
            <div className="btns-cont">
            <button id="high" className="prior-btn" onClick={handlepriority} value="high">High</button>
            <button id="med" className="prior-btn" onClick={handlepriority} value="medium">Medium</button>
            <button id="low"className="prior-btn" onClick={handlepriority} value="low">Low</button>
            </div>
          </div>
            <button className="handletodo" onClick={handleTodoTask}>Add</button>
        </div>
      </div>
    </>
  );
};

export default AddTask;
