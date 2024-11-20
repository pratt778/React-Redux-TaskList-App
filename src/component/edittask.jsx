import React, { useState } from "react";

const EditTask = ({ task = {}, closeModal }) => {
  const [taskname, setTaskName] = useState(task.taskname || ""); // 
  const [taskpriority, setTaskPriority] = useState(task.priority || "Low"); 

  const handleSave = () => {
    console.log("Edited Task Details:");
    console.log("Task ID:", task.tid);
    console.log("Task Name:", taskname);
    console.log("Priority:", taskpriority);
   
    closeModal(); 
  };

  return (
    <div id="edittask" className="active">
      <div className="addtask-cont">
        <div className="a-head">
          <h1>Edit Task</h1>
          <button onClick={closeModal}>
            <span>X</span>
          </button>
        </div>
        <div className="taskbox-cont">
          <span id="task-title">Task</span>
          <input
            type="text"
            className="task-name"
            value={taskname}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="prior-cont">
          <span id="task-title">Priority</span>
          <div className="btns-cont">
            <button
              id="high"
              className={`prior-btn ${taskpriority === "High" ? "highlight" : ""}`}
              onClick={() => setTaskPriority("High")}
            >
              High
            </button>
            <button
              id="med"
              className={`prior-btn ${
                taskpriority === "Medium" ? "highlight" : ""
              }`}
              onClick={() => setTaskPriority("Medium")}
            >
              Medium
            </button>
            <button
              id="low"
              className={`prior-btn ${taskpriority === "Low" ? "highlight" : ""}`}
              onClick={() => setTaskPriority("Low")}
            >
              Low
            </button>
          </div>
        </div>
        <button onClick={handleSave}>Edit</button>
      </div>
    </div>
  );
};

export default EditTask;
