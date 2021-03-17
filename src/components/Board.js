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

  function handleOnDragEnd(result) {
    if (!result.destination) {
      //out side of Board
      return;
    }
    //console.log(result);
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  }

  return (
    <div className="boardWrapper">
      <span>{title}</span>
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="Todos">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={String(task.id)}
                    index={index}
                  >
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
                <div style={{ display: "none" }}> {provided.placeholder}</div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
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
