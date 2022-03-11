//Todo:
//Have tile sliding be continuous instead of one move at a time
//Add Rest of pages
//Add Timer


import React, { useState } from 'react';
import '../styles/App.css';
import Board from '../components/Board';
import helpers from '../helpers';

const App = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])

  return (
    <div>
      <div className="topbar">
        <button onClick={() => helpers.decWidth(width, setWidth, setTiles, setCompletedBoard)}>-</button>  &ensp;
        <span className="gradtext">Board Size</span>  &ensp;
        <button onClick={() => helpers.incWidth(width, setWidth, setTiles, setCompletedBoard)}>+</button>
        &emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
      <button id="App-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Start</button>
      <div id="App-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles}/>
      </div>
    </div>
  )
}

export default App


//console.log(JSON.parse(JSON.stringify(object)))