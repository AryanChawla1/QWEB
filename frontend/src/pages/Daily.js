
import React, { useState } from 'react';
import '../styles/Daily.css';
import Board from '../components/Board';
import helpers from '../helpers';
import { Link } from 'react-router-dom';

const App = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])
  const [gameOver, setGameOver] = useState(false);

  if (gameOver) {
    console.log(gameOver)
  }

  return (
    <div>
      <div className="navbar">
        {helpers.getNavbarElements()}
      </div>
      <Link to='/VSBot'><button>VS Bot</button></Link>
      <Link to='/daily/leaderboard'><button>Leaderboard</button></Link>
      <button id="Daily-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Start</button>
      <div id="Daily-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles} setGameOver={setGameOver}/>
      </div>
      <div id="Daily-boardSizeBtns">
        <button className="button2" onClick={() => helpers.decWidth(width, setWidth, setTiles, setCompletedBoard)}>-</button>
        &nbsp;&nbsp;Board Size&nbsp;&nbsp;
        <button className="button2" onClick={() => helpers.incWidth(width, setWidth, setTiles, setCompletedBoard)}>+</button>
      </div>
    </div>
  )
}

export default App
//<button onClick={() => helpers.incWidth(width, setWidth, setTiles, setCompletedBoard)}>+</button>