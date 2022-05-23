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
  const [commands, setCommands] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(0)
  const secondsBetweenMoves = 1

  const [botMoved, setBotMoved] = useState(false)
  if (isActive) {
    if (timeElapsed % (secondsBetweenMoves*100) === 0 && timeElapsed !== 0) {
      if (!botMoved) {
        if (cmdIndex < commands.length) {
          setBotMoved(true)
          if(commands[cmdIndex].charAt(0) === 'u') {
            helpers.moveCol(width, tilesB, parseInt(commands[cmdIndex].substring(1)), -1)
          }
          else if (commands[cmdIndex].charAt(0) === 'd') {
            helpers.moveCol(width, tilesB, parseInt(commands[cmdIndex].substring(1)), 1)
          }
          else if (commands[cmdIndex].charAt(0) === 'l') {
            helpers.moveRow(width, tilesB, parseInt(commands[cmdIndex].substring(1)), -1)
          }
          else if (commands[cmdIndex].charAt(0) === 'r') {
            helpers.moveRow(width, tilesB, parseInt(commands[cmdIndex].substring(1)), 1)
          }
          setCmdIndex(cmdIndex => cmdIndex + 1)
        }
      }
    }
    else if (botMoved) {
      setBotMoved(false)
    }
  }
  if (cmdIndex === commands.length && commands.length !== 0) {
    setGameOver(true)
  }

  if (gameOver) {
    setGameOver(false);
    setActive(false);
    setCmdIndex(0)
  }
  const toggleActive = () => {
    setReset(false)
    if (isActive) {
      setReset(true)
    }
    setActive(!isActive)
  }

  const onStartBtnClick = () => {
    const newBoard = helpers.shuffleTiles(width, setCompletedBoard, [setTilesB, setTilesP])
    toggleActive()
    console.log(newBoard)
    send_backend(newBoard)
  }

  function send_backend(board) {
    fetch('http://127.0.0.1:8000/vs_bot/', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({"board" : helpers.packageTiles(board, width)})
    })
      .then (response => response.json())
      .then(data => {
        if (data.commands) {
          console.log("Success!")
          setCommands(data.commands)
          console.log(data.commands)
          }
        }
      )}
  return (
    <div>
      <Link to='/classic'>
         <button id="back-button">Back</button>
      </Link>
      <div className="navbar">
        {helpers.getNavbarElements()}
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
