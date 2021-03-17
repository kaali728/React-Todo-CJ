import React from "react";
import { MdDelete } from "react-icons/md";
import { RiDragMove2Fill } from "react-icons/ri";

export default function Todo({ task, setTasks, deleteTask, index, moveTodo }) {
  return (
    <div className="todoWrapper">
      <div className="todotask">{task}</div>
      <MdDelete
        className="removeIcon"
        size="23"
        onClick={() => deleteTask(index)}
      />
    </div>
  );
}
