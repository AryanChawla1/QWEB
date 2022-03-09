import React from 'react'
import Tiles from './Tiles'

const Board = ({width, tiles, boardWidth, moveRow, moveCol, checkIfComplete}) => {
  return (   
    <div className="board" style={{width: boardWidth, height: boardWidth}}>
        <Tiles width={width} tiles={tiles} boardWidth={boardWidth} moveRow={moveRow} moveCol={moveCol} checkIfComplete={checkIfComplete}/>
    </div>
  )
}

export default Board