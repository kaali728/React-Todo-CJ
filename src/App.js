import "./styles.css";
import { useState } from "react";
import Board from "./components/Board";

export default function App() {
  const [boards, setBoards] = useState([
    { id: 0, boardName: "Todo" },
    { id: 1, boardName: "In progress" },
    { id: 2, boardName: "Completed" }
  ]);
  const [newBoardName, setNewBoardName] = useState("");
  const [makeNewBoard, setMakeNewBoard] = useState(false);

  function showNewBoard() {
    setMakeNewBoard(!makeNewBoard);
  }

  function newBoard(e) {
    e.preventDefault();
    if (newBoardName.length > 0) {
      setBoards((oldBoards) => [
        ...oldBoards,
        { id: boards.length, boardName: newBoardName }
      ]);
      setNewBoardName("");
      setMakeNewBoard(false);
    } else {
      alert("You have to Enter a Board Name");
    }
  }

  function deleteBoard(id) {
    const editedBoard = boards.filter((board, index) => board.id !== id);
    setBoards(editedBoard);
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
      <div className="boardOverview">
        {boards.map((board, index) => (
          <Board
            title={board.boardName}
            key={index}
            index={board.id}
            deleteBoard={deleteBoard}
          />
        ))}
      </div>
    </div>
  );
}
