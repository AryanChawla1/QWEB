import React from 'react'
import Tiles from './Tiles'

const Board = ({width, tiles, boardWidth, moveRow, moveCol, completedBoard, setCompletedBoard, setTiles, nonFunctional}) => {
  return (   
    <div className="board" style={{width: boardWidth, height: boardWidth}}>
        <Tiles width={width} tiles={tiles} boardWidth={boardWidth} setTiles={setTiles}
        nonFunctional={nonFunctional}/>
    </div>
  )
}

export default Board