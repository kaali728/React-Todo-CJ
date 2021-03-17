import React from "react";
import { MdDelete } from "react-icons/md";
import { MdDragHandle } from "react-icons/md";

export default function Todo({ task, setTasks, deleteTask, index }) {
  return (
    <div className="todoWrapper">
      <div className="todotask">{task}</div>
      <MdDelete
        className="removeIcon"
        size="23"
        onClick={() => deleteTask(index)}
      />
      <MdDragHandle className="removeIcon" size="23" />
    </div>
  );
}
