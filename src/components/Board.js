import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FiPlus } from "react-icons/fi";

export default function Board({ title }) {
  const [tasks, setTasks] = useState([]);
  const [makeNew, setMakeNew] = useState(false);
  function deleteTask(TaskIndex) {
    const editedTasks = tasks.filter((task, index) => index !== TaskIndex);
    setTasks(editedTasks);
  }

  return (
    <div className="boardWrapper">
      <span>{title}</span>
      <div>
        {tasks.map((task, index) => (
          <Todo
            task={task}
            key={index}
            index={index}
            setTasks={setTasks}
            deleteTask={deleteTask}
          />
        ))}
      </div>
      {makeNew ? (
        <TodoForm setTasks={setTasks} setMakeNew={setMakeNew} />
      ) : (
        <div className="addIcon" onClick={() => setMakeNew(true)}>
          <FiPlus />
        </div>
      )}
    </div>
  );
}
