import "./styles.css";
import Board from "./components/Board";

export default function App() {
  return (
    <div className="App">
      <h1>React todo App</h1>
      <div className="boardOverview">
        <Board title={"Todo"} />
        <Board title={"In progress"} />
        <Board title={"Completed"} />
      </div>
    </div>
  );
}
