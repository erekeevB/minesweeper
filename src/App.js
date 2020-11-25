import './App.css';
import Minesweeper from './Minesweeper/Minesweeper';

function App() {
  return (
    <div className="App">
      <Minesweeper height={10} width={10} coords={[[0, 1], [1, 1], [2, 2]]} />
    </div>
  );
}

export default App;
