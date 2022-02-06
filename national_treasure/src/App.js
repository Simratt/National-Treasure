import './App.css';
import Box from './components/box';
import React, {useState} from 'react';

function App() {
  const [board, setBoard] = useState([])
  function addItem() {
    setBoard([...board, <Box text="User" />])
  }
  return (
    <div className="App">
      <h1 id='title'>LEADERBOARD</h1>
      <button onClick={addItem}>click me</button>
      
      <ul>
        {board.map(b => (
          <li>{b}</li>))}
      </ul>
    </div>
  );
}
export default App;
