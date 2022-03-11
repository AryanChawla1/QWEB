//Todo:
//Move Board functions to Board.js
//Have tile sliding be continuous instead of one move at a time

import React, { useState } from 'react';
import '../styles/App.css';
import Board from '../components/Board';
import helpers from '../helpers';

const App = () => {
  const boardWidth = 500
  let [width, setWidth] = useState(3) //width in tiles
  let [completedBoard, setCompletedBoard] = useState([])

  const initTiles = (w) => {
    let newTiles = []
    for (let i = 0; i < w ** 2; i++) {
      newTiles.push(
        {
          id: i + 1,
          row: Math.floor(i / w), // Position in array
          col: i % w,
        }
      )
    }
    for (let i = 0; i < w ** 2; i++) {
      if (w <= 5) {
        newTiles[i].text = String.fromCharCode(65 + i)
      }
      else {
        newTiles[i].text = i + 1
      }
    }
    return newTiles
  }

  const [tiles, setTiles] = useState(() => initTiles(width))

  const incWidth = () => {
    if (width < 10) {
      width += 1
      setWidth(width)
      setTiles(initTiles(width))
      setCompletedBoard([])
    }
  }

  const decWidth = () => {
    if (width > 3) {
      width -= 1
      setWidth(width)
      setTiles(initTiles(width))
      setCompletedBoard([])
    }
  }

  const moveRow = (tiles, row, dir) => { //dir 1 = move row right, -1 = move row left
    let rowTiles = []
    let rowTiles0 = []
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].row === row) {
        rowTiles.push(JSON.parse(JSON.stringify(tiles[i])))
        rowTiles0.push(JSON.parse(JSON.stringify(tiles[i])))
      }
    }
    for (let i = 0; i < rowTiles0.length; i++) {
      rowTiles[(((i - dir) % rowTiles0.length) + rowTiles0.length) % rowTiles0.length].col = rowTiles0[i].col
      tiles.splice(rowTiles0[i].row * width + rowTiles0[i].col, 1, rowTiles[(((i - dir) % rowTiles.length) + rowTiles.length) % rowTiles.length]);
    }
    return JSON.parse(JSON.stringify(tiles))
  }

  const moveCol = (tiles, col, dir) => {
    let colTiles = []
    let colTiles0 = []
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].col === col) {
        colTiles.push(JSON.parse(JSON.stringify(tiles[i])))
        colTiles0.push(JSON.parse(JSON.stringify(tiles[i])))
      }
    }
    for (let i = 0; i < colTiles0.length; i++) {
      colTiles[(((i - dir) % colTiles0.length) + colTiles0.length) % colTiles0.length].row = colTiles0[i].row
      tiles.splice(colTiles0[i].row * width + colTiles0[i].col, 1, colTiles[(((i - dir) % colTiles.length) + colTiles.length) % colTiles.length]);
    }
    return JSON.parse(JSON.stringify(tiles))
  }

  const shuffleTiles = (w) => {
    let newTiles = initTiles(w)
    for (let i = 0; i < 75; i++) {
      newTiles = moveRow(newTiles, helpers.randInt(0, w-1), helpers.randInt(0,1))
      newTiles = moveCol(newTiles, helpers.randInt(0, w-1), helpers.randInt(0,1))
    }

    setCompletedBoard(initTiles(w))
    setTiles(newTiles)
  }

  const checkIfComplete = () => {
    if (JSON.stringify(tiles) === JSON.stringify(completedBoard)) {
      setTimeout(function () { alert("Well Done!") }, 260); //Activates too early if there isnt a delay
      setCompletedBoard([])
    }
  }

  return (
    <div>
      <div className="topbar">
        <button onClick={decWidth}>-</button>  &ensp;
        <span className="gradtext">Board Size</span>  &ensp;
        <button onClick={incWidth}>+</button>
        &emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
      <div className="titleText">TORUS PUZZLE</div>
      <div className="buttonsMainPage">
        <button className="button1" onClick={() => shuffleTiles(width)}>Shuffle</button>
        <button className="button1">Button</button>
      </div>
      <Board width={width} tiles={tiles} boardWidth={boardWidth} moveRow={moveRow} moveCol={moveCol}
        checkIfComplete={checkIfComplete} setTiles={setTiles} />
    </div>
  )
}

export default App


//console.log(JSON.parse(JSON.stringify(object)))