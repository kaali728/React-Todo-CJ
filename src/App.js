import "./styles.css";
import { useState } from "react";
import Board from "./components/Board";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function App() {
  const [boards, setBoards] = useState([
    { boardName: "Todo" },
    { boardName: "In progress" },
    { boardName: "Completed" }
  ]);
  const [newBoardName, setNewBoardName] = useState("");
  const [makeNewBoard, setMakeNewBoard] = useState(false);

  function showNewBoard() {
    setMakeNewBoard(!makeNewBoard);
  }
  function newBoard(e) {
    e.preventDefault();
    if (newBoardName.length > 0) {
      setBoards((oldBoards) => [...oldBoards, { boardName: newBoardName }]);
      setMakeNewBoard(false);
    } else {
      alert("You have to Enter a Board Name");
    }
  }
  return (
    <div className="App">
      <span className="headerText">
        My Todo's{" "}
        <span role="img" aria-labelledby="emojiDonut">
          🍩
        </span>
      </span>
      <div className="makeNewBoard" onClick={showNewBoard}>
        {makeNewBoard ? "Cancel" : "New Board"}
      </div>
      {makeNewBoard ? (
        <form onSubmit={newBoard}>
          <input
            className="formInput"
            value={newBoardName}
            onChange={(e) => setNewBoardName(e.target.value)}
            placeholder="Board Name"
          ></input>
        </form>
      ) : null}
      <DragDropContext>
        <Droppable droppableId="Todos">
          {(provided) => (
            <div
              className="boardOverview"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {boards.map((board, index) => (
                <Board title={board.boardName} key={index} />
              ))}
              <div style={{ display: "none" }}>{provided.placeholder}</div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
