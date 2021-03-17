import "./styles.css";
import Board from "./components/Board";

export default function App() {
  return (
    <div className="App">
      <span className="headerText">My Todo's 🍩</span>
      <div className="boardOverview">
        <Board title={"Todo"} />
        <Board title={"In progress"} />
        <Board title={"Completed"} />
      </div>
    </div>
  );
}
