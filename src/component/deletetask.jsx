import React from "react";

const DeleteTask = ({ taskId, closeDeleteModal, handleDelete }) => {
  return (
    <div id="deletetask" className="active">
      <div className="addtask-cont">
        <div className="a-head">
          <h1>Delete Task</h1>
          <button onClick={closeDeleteModal}>
            <span>X</span>
          </button>
        </div>
        <div className="del-pop">
          <h3>Are you sure you want to delete this task?</h3>
          <div className="del-btns">
            <button onClick={() => handleDelete(taskId)}>Delete</button>
            <button onClick={closeDeleteModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
