import React, { useState } from "react";

export default function TodoForm({ setTasks, setMakeNew }) {
  const [newTask, setNewTask] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (newTask.length > 0) {
      setTasks((oldTask) => [...oldTask, newTask]);
      setMakeNew(false);
    } else {
      alert("You have to Enter Something");
    }
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="enter task"
        ></input>
        <div onClick={() => setMakeNew(false)}>cancel</div>
        <button type="submit">add</button>
      </form>
    </div>
  );
}
