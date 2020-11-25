import { useState } from 'react';
import './App.css';
import Minesweeper from './Minesweeper/Minesweeper';

function App() {

    let [isSubmit, setIsSubmit] = useState(false)

    return (
        <div className="App">
            {!isSubmit ? 
            <div>
                <input />
                <input />
                <button onClick={()=>{setIsSubmit(true)}}>Play</button>
            </div>
            : 
            <Minesweeper size={10} num={10} setIsSubmit={setIsSubmit} />}
        </div>
    );
}

export default App;
