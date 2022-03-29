import React, { useState } from 'react';
import '../styles/VSBot.css';
import Board from '../components/Board';
import Timer from '../components/Timer';
import helpers from '../helpers';
import { Link } from 'react-router-dom';

const VSBot = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tilesB, setTilesB] = useState(() => helpers.initTiles(width)) //Bot's tiles
  const [tilesP, setTilesP] = useState(() => helpers.initTiles(width)) //Player's tiles
  const [completedBoard, setCompletedBoard] = useState([])

  const [isActive, setActive] = useState(false)
  const [reset, setReset] = useState(false);

  const onStartBtnClick = () => {
    helpers.shuffleTiles(width, setCompletedBoard, [setTilesB, setTilesP])
    toggleActive()
  }

  const toggleActive = () => {
    setReset(false)
    if (isActive) {
      setReset(true)
    }
    setActive(!isActive)
  }

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
      <Timer className="timer" isActive={isActive} reset={reset}/>
      <button id="VSBot-startBtn" className="button1" onClick={() => onStartBtnClick()}>Start</button>
      <div id="VSBot-botBoard" className="board">
        <Board width={width} tiles={tilesB} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTilesB} nonInteractable={true}/>
      </div>
      <div id="VSBot-playerBoard" className="board">
        <Board width={width} tiles={tilesP} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTilesP}/>
      </div>
      <div id="VSBot-boardSizeBtns">
        <button className="button2" onClick={() => helpers.decWidth(width, setWidth, [setTilesB, setTilesP], setCompletedBoard)}>-</button>
        &nbsp;&nbsp;Board Size&nbsp;&nbsp;
        <button className="button2" onClick={() => helpers.incWidth(width, setWidth, [setTilesB, setTilesP], setCompletedBoard)}>+</button>
      </div>
    </div>
  )
}

export default VSBot
