//Todo:
//Have tile sliding be continuous instead of one move at a time
//Add Rest of pages
//Add Timer
//Move splash page buttons down a little

import React, { useState } from 'react';
import '../styles/Classic.css';
import Board from '../components/Board';
import helpers from '../helpers';

const Classic = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])

  return (
    <div>
      <button id="App-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Start</button>
      <div id="App-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles}/>
      </div>
    </div>
  )
}

export default Classic


//console.log(JSON.parse(JSON.stringify(object)))