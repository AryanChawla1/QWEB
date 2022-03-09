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


export default {getTileFromId, packageTiles, getVisualPosition, randInt}
