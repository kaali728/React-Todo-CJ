import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FiPlus } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
          <Draggable key={task.id} draggableId={String(task.id)} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Todo
                  task={task.text}
                  key={index}
                  index={index}
                  setTasks={setTasks}
                  deleteTask={deleteTask}
                />
              </div>
            )}
          </Draggable>
        ))}
      </div>
      {makeNew ? (
        <TodoForm
          length={tasks.length}
          setTasks={setTasks}
          setMakeNew={setMakeNew}
        />
      ) : (
        <div className="addIcon" onClick={() => setMakeNew(true)}>
          <FiPlus />
        </div>
      )}
    </div>
  );
}
