import React, { useState } from 'react';
import '../styles/VSBot.css';
import Board from '../components/Board';
import helpers from '../helpers';

const VSBot = () => {
  const boardWidth = 500
  const [width, setWidth] = useState(3) //width in tiles
  const [tilesB, setTilesB] = useState(() => helpers.initTiles(width)) //Bot's tiles
  const [tilesP, setTilesP] = useState(() => helpers.initTiles(width)) //Player's tiles
  const [completedBoard, setCompletedBoard] = useState([])

  return (
    <div>
      <button id="VSBot-startBtn" className="button1" onClick={() => helpers.shuffleTiles(width, setCompletedBoard, [setTilesB, setTilesP])}>Start</button>
      <div id="VSBot-botBoard" className="board">
        <Board width={width} tiles={tilesB} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTilesB} nonInteractable={true}/>
      </div>
      <div id="VSBot-playerBoard" className="board">
        <Board width={width} tiles={tilesP} boardWidth={boardWidth} completedBoard={completedBoard} 
        setCompletedBoard={setCompletedBoard} setTiles={setTilesP}/>
      </div>
    </div>
  )
}

export default VSBot
