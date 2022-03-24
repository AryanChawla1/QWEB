//Todo:
//Have tile sliding be continuous instead of one move at a time
//Add Rest of pages
//Add Timer
//Move splash page buttons down a little

import React, { useState } from 'react';
import '../styles/Classic.css';
import Board from '../components/Board';
import helpers from '../helpers';
import { Link } from 'react-router-dom';

const Classic = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tiles, setTiles] = useState(() => helpers.initTiles(width))
  const [completedBoard, setCompletedBoard] = useState([])

  return (
    <div>
      <div className="navbar">
        <Link to='/create-account'>
          <button className="accountStuff">Create Account</button>
        </Link>
        <Link to='/sign-in'>
        <button className="accountStuff">Sign In</button>
        </Link>
      </div>
      <button id="Classic-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, setTiles)}>Start</button>
      <div id="Classic-board" className="board">
        <Board width={width} tiles={tiles} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTiles}/>
      </div>
      <div id="Classic-boardSizeBtns">
        <button className="button2" onClick={() => helpers.decWidth(width, setWidth, setTiles, setCompletedBoard)}>-</button>
        &nbsp;&nbsp;Board Size&nbsp;&nbsp;
        <button className="button2" onClick={() => helpers.incWidth(width, setWidth, setTiles, setCompletedBoard)}>+</button>
      </div>
      <Link to='/VSBot'><button>VS Bot</button></Link>
      <Link to='/classic/leaderboard'><button>Leaderboard</button></Link>
    </div>
  )
}

export default Classic


//console.log(JSON.parse(JSON.stringify(object)))