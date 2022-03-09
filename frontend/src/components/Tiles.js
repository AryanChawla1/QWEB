import { useState } from 'react'
import React from 'react'
import Tile from './Tile'

const Tiles = ({ width, tiles, boardWidth, moveRow, moveCol, checkIfComplete, setTiles }) => {
  const [heldTile, setHeldTile] = useState(null)

  const tileHeld = (t) => {
    setHeldTile(t)
  }
  const tileReleased = (t) => {
    setHeldTile(null)
  }

  const tileMovedOnto = (t) => {
    if (heldTile != null) {
      if (heldTile.row < t.row) { moveCol(tiles, t.col, 1) }
      else if (heldTile.row > t.row) { setTiles(moveCol(tiles, t.col, -1)) }
      else if (heldTile.col < t.col) { setTiles(moveRow(tiles, t.row, 1)) }
      else if (heldTile.col > t.col) { setTiles(moveRow(tiles, t.row, -1)) }
      else { console.log("[!] Error in Tiles/tileMovedOnto") }
      checkIfComplete()
    }
  }

  return (
    <div>
      {tiles.map((tile) => (
        <Tile key={tile.text} tiles={tiles} width={width} tile={tile} boardWidth={boardWidth}
          moveRow={moveRow} moveCol={moveCol} tileHeld={tileHeld} tileReleased={tileReleased}
          tileMovedOnto={tileMovedOnto} checkIfComplete={checkIfComplete} />
      ))}
    </div>
  )
}

export default Tiles