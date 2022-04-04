const getTileFromId = (id, tiles) => {
    for (let i=0; i<tiles.length; i++) {
      if (tiles[i].id === id) {
        return tiles[i-1]
      }
    }
    console.log("[!] getTileFromId - no element found")
  }


const packageTiles = (tiles, width) => {
    // Cleans up tiles array for use in the the backend (2D Array of ids)
    const tileIds = tiles.map((tile) => tile.id)
    let packagedTiles = []
    for (let row=0; row<width; row++) {
      packagedTiles.push([])
      for (let col=0; col<width; col++) {
        packagedTiles[row].push(tileIds[row*width + col])
      }
    }
    return packagedTiles
  }

const getVisualPosition = (tile, tileWidth) => {
  return {
    x: tile.col * tileWidth,
    y: tile.row * tileWidth
  }
}

const randInt = (min, max) => {
  //Random integer from min to max (inclusive)
	return Math.floor(Math.random() * (max + 1 - min)) + min;
}

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

const shuffleTiles = (w, setCompletedBoard, setTiles) => {
  let newTiles = initTiles(w)
  for (let i = 0; i < 75; i++) {
    newTiles = moveRow(w, newTiles, randInt(0, w-1), randInt(0,1))
    newTiles = moveCol(w, newTiles, randInt(0, w-1), randInt(0,1))
  }
  setCompletedBoard(initTiles(w))
  if (Array.isArray(setTiles)) {
    for (let i = 0; i < setTiles.length; i++) {
      setTiles[i](newTiles.slice())
    }
  }
  else {
    setTiles(newTiles)
  }
  return newTiles
}

const checkIfComplete = (tiles, completedBoard, setCompletedBoard, setGameOver) => {
  if (JSON.stringify(tiles) === JSON.stringify(completedBoard)) {
    setTimeout(function () { setGameOver(true) }, 260);
    setCompletedBoard([])
    return true;
  }
}

const moveRow = (w, tiles, row, dir) => { //dir 1 = move row right, -1 = move row left
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
    tiles.splice(rowTiles0[i].row * w + rowTiles0[i].col, 1, rowTiles[(((i - dir) % rowTiles.length) + rowTiles.length) % rowTiles.length]);
  }
  return JSON.parse(JSON.stringify(tiles))
}

const moveCol = (w, tiles, col, dir) => {
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
    tiles.splice(colTiles0[i].row * w + colTiles0[i].col, 1, colTiles[(((i - dir) % colTiles.length) + colTiles.length) % colTiles.length]);
  }
  return JSON.parse(JSON.stringify(tiles))
}

const incWidth = (w, setWidth, setTiles, setCompletedBoard) => {
  if (w < 10) {
    w += 1
    setWidth(w)
    if (Array.isArray(setTiles)) {
      for (let i = 0; i < setTiles.length; i++) {
        setTiles[i](initTiles(w))
      }
    }
    else {
      setTiles(initTiles(w))
    }
    setCompletedBoard([])
  }
}

const decWidth = (w, setWidth, setTiles, setCompletedBoard) => {
  if (w > 3) {
    w -= 1
    setWidth(w)
    if (Array.isArray(setTiles)) {
      for (let i = 0; i < setTiles.length; i++) {
        setTiles[i](initTiles(w))
      }
    }
    else {
      setTiles(initTiles(w))
    }
    setCompletedBoard([])
  }
}

const logOut = () => {
  localStorage.removeItem("token");
 }

export default {
  getTileFromId, packageTiles, getVisualPosition,
  randInt,initTiles, shuffleTiles, checkIfComplete,
  moveRow, moveCol, incWidth, decWidth, logOut
}
