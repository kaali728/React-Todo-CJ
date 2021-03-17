import React, { useState } from "react";

export default function TodoForm({ setTasks, setMakeNew, length }) {
  const [newTask, setNewTask] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (newTask.length > 0) {
      setTasks((oldTask) => [...oldTask, { id: length + 1, text: newTask }]);
      setMakeNew(false);
    } else {
      alert("You have to Enter Something");
    }
  }

  return (
    <div>
      <form className="formTodo" onSubmit={addTodo}>
        <input
          className="formInput"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="your task"
        ></input>
        <div style={{ display: "flex" }}>
          <div className="formButton" onClick={() => setMakeNew(false)}>
            Cancel
          </div>
          <button className="formButton" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
