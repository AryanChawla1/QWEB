//Todo:
//Move Board functions to Board.js
//Have tile sliding be continuous instead of one move at a time

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
      <div className="titleText">TORUS PUZZLE</div>
      <div className="buttonsMainPage">
        <button className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Shuffle</button>
        <button className="button1">Button</button>
      </div>
      <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
      setCompletedBoard={setCompletedBoard} setTiles={setTiles} />
    </div>
  )
}

export default App


//console.log(JSON.parse(JSON.stringify(object)))