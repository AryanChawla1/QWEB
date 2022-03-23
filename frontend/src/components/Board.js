import React from 'react'
import Tiles from './Tiles'

const Board = ({width, tiles, boardWidth, completedBoard, setCompletedBoard, setTiles, nonInteractable}) => {
  return (   
    <div style={{width: boardWidth, height: boardWidth}}>
        <Tiles width={width} tiles={tiles} boardWidth={boardWidth} setTiles={setTiles}
        completedBoard={completedBoard} setCompletedBoard={setCompletedBoard} nonInteractable={nonInteractable}/>
    </div>
  )
}

export default Board