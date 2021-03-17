import React from "react";

export default function Todo({ task, setTasks, deleteTask, index, key }) {
  return (
    <div className="todoWrapper">
      <div>{task}</div> {/* <div>edit</div> */}
      <div onClick={() => deleteTask(index)}>delete</div>
    </div>
  );
}
