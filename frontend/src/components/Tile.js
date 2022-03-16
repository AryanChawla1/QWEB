import React from 'react'
import { Motion, spring } from "react-motion"
import helpers from '../helpers'

const Tile = ({ width, tile, boardWidth, tileHeld, tileReleased, tileMovedOnto }) => {
  const tileWidth = boardWidth / width
  const visualPos = helpers.getVisualPosition(tile, tileWidth)
  const fontSize = ((tile.id < 100) ? tileWidth * 0.6 : tileWidth * 0.55) //Allows 3 digit numbers to fit in box (e.g. 100)
  const motionStyle = {
    translateX: spring(visualPos.x, { stiffness: 800, damping: 50 }),
    translateY: spring(visualPos.y, { stiffness: 800, damping: 50 })
  }

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <button className="tile" onMouseDown={() => tileHeld(tile)} onMouseUp={() => tileReleased(tile)}
        onMouseLeave={() => tileReleased(tile)} onMouseEnter={() => tileMovedOnto(tile)}
        style={{
          width: tileWidth,
          height: tileWidth,
          transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          }}>
          <div className="tileOuter"
          style={{
            width: tileWidth,
            height: tileWidth,
            }}>
          </div>
          <div className="tileInner"
            style={{
              width: tileWidth*0.95,
              height: tileWidth*0.95,
              fontSize: fontSize,
              // backgroundColor: "rgba(" + (255 / (width)) * (width - ((tile.id - 1) % width)) + "," + (220 / (width - 1)) * Math.floor((tile.id - 1) / width) + "," + (220 / (width - 1)) * ((tile.id - 1) % width) + "," + 0.8 +")",
            }}>
            {tile.text}
          </div>
        </button>
      )}
    </Motion>
  )
}

export default Tile