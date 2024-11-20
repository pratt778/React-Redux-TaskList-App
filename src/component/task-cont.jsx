import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import EditTask from "./edittask";
import DeleteTask from "./deletetask";


const TaskContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTaskId, setDeletingTaskId] = useState(null);
  const [progress,setProgress]=useState("Todo")

  const handleprogress=(e)=>{
    // console.log(progress)
    if(progress=="Todo"){
      setProgress("InProgress")
    }
    if(progress=="InProgress"){
      setProgress("Done")
    }
    if(progress=="Done"){
     setProgress("Todo")
    }
  }
    

  const handleDeleteTask = (taskId) => {
    console.log(`deleting  ID: ${taskId}`);
    dispatch({ type: "Delete", payload: { tid: taskId } });
    setDeletingTaskId(null);
  };

  return (
    <>
      <div className="cont-task">
        {todos.map((task) => (
          <div className="task-cont" key={task.tid}>
            <div className="task-indi">
              <span id="task-title">Task</span>
              <span id="task-name">{task.taskname}</span>
            </div>
            <div className="task-indi">
              <span id="pro-title">Priority</span>
              <span id="pro-name">{task.priority}</span>
            </div>
            <div>
              <button value="Todo"
              className="btn-lists"
              onClick={(e)=>handleprogress(e)}>{progress}</button>
            </div>
            <button
            className="btn-list"
            onClick={() => setEditingTask(task)}><i class="ri-edit-box-line"></i></button>
            <button
            className="btn-list"
            onClick={() => setDeletingTaskId(task.tid)}><i class="ri-delete-bin-line"></i></button>
          </div>
        ))}
      </div>

      {editingTask && (
        <EditTask
          task={editingTask}
          closeModal={() => setEditingTask(null)}
        />
      )}

      {deletingTaskId !== null && (
        <DeleteTask
          taskId={deletingTaskId}
          closeDeleteModal={() => setDeletingTaskId(null)}
          handleDelete={handleDeleteTask}
        />
      )}
    </>
  );
};

export default TaskContainer;
