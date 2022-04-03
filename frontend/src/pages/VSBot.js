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
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setActive] = useState(false)
  const [gameOver, setGameOver] = useState(false);
  const [reset, setReset] = useState(false);

  if (gameOver) {
    setGameOver(false);
    setActive(false);
  }

  const toggleActive = () => {
    setReset(false)
    if (isActive) {
      setReset(true)
    }
    setActive(!isActive)
  }

  const onStartBtnClick = () => {
    helpers.shuffleTiles(width, setCompletedBoard, [setTilesB, setTilesP])
    toggleActive()
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
        <Link to='/'>
          <button className="accountStuff" onClick={() => helpers.logOut()}>Log Out</button>
        </Link>
      </div>
      <div className="timeElapsedText">Time Elapsed</div>
      <Timer className="timer" isActive={isActive} reset={reset} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed}/>
      <button id="VSBot-startBtn" className="button1" onClick={() => onStartBtnClick()}>Start</button>
      <div id="VSBot-botBoard" className="board">
        <Board width={width} tiles={tilesB} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTilesB} nonInteractable={true}/>
      </div>
      <div id="VSBot-playerBoard" className="board">
        <Board width={width} tiles={tilesP} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTilesP} setGameOver={setGameOver}/>
      </div>
      <div id="VSBot-boardSizeBtns">
        <button className="button2" onClick={() => helpers.decWidth(width, setWidth, [setTilesB, setTilesP], setCompletedBoard)}>-</button>
        &nbsp;&nbsp;Board Size&nbsp;&nbsp;
        <button className="button2" onClick={() => helpers.incWidth(width, setWidth, [setTilesB, setTilesP], setCompletedBoard)}>+</button>
      </div>
      <Link to='/classic/leaderboard'>
          <button id="VSBot-LeaderboardBtn">Leaderboard</button>
      </Link>
    </div>
  )
}

export default VSBot
