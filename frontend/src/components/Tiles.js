import { useState } from 'react'
import React from 'react'
import Tile from './Tile'
import helpers from '../helpers'

const Tiles = ({ width, tiles, boardWidth, completedBoard, setCompletedBoard, setTiles, nonFunctional}) => {
  const [heldTile, setHeldTile] = useState(null)

  const tileHeld = (t) => {
    if (nonFunctional) return;
    setHeldTile(t)
  }
  const tileReleased = (t) => {
    if (nonFunctional) return;
    setHeldTile(null)
  }

  const tileMovedOnto = (t) => {
    if (nonFunctional) return;
    if (heldTile != null) {
      if (heldTile.row < t.row) { helpers.moveCol(width, tiles, t.col, 1) }
      else if (heldTile.row > t.row) { setTiles(helpers.moveCol(width, tiles, t.col, -1)) }
      else if (heldTile.col < t.col) { setTiles(helpers.moveRow(width, tiles, t.row, 1)) }
      else if (heldTile.col > t.col) { setTiles(helpers.moveRow(width, tiles, t.row, -1)) }
      else { console.log("[!] Error in Tiles/tileMovedOnto") }
      helpers.checkIfComplete(tiles, completedBoard, setCompletedBoard)
    }
  }

  return (
    <div>
      {tiles.map((tile) => (
        <Tile key={tile.id} width={width} tile={tile} boardWidth={boardWidth}
          tileHeld={tileHeld} tileReleased={tileReleased}
          tileMovedOnto={tileMovedOnto} />
      ))}
    </div>
  )
}

export default Tiles