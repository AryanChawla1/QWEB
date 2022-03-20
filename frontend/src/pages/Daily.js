
import React, { useState } from 'react';
import '../styles/Daily.css';
import Board from '../components/Board';
import helpers from '../helpers';

const App = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])

  return (
    <div>
      <button id="Daily-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Start</button>
      <div id="Daily-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles}/>
      </div>
    </div>
  )
}

export default App
//<button onClick={() => helpers.incWidth(width, setWidth, setTiles, setCompletedBoard)}>+</button>