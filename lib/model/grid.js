function initCells(x, y) {
  let cells = [];
  for (let i = 0; i <= x; i++) {
    cells[i] = [];
    for (let j = 0; j <= y; j++) {
      cells[i][j] = false;
    }
  }
  return cells;
}
function validateCoordinates(x, y) {
  if (x > this.upperX || y > this.upperY || x < 0 || y < 0) {
    throw Error('Out of bounds');
  }
}

class Grid {
  constructor(x,y) {
    this.upperX = x;
    this.upperY = y;
    this.cells = initCells(x, y);
  }
  isCellOccupied(x, y) {
    validateCoordinates.call(this, x,y);
    return this.cells[x][y];
  }
  setCellOccupied(x, y) {
    validateCoordinates.call(this, x,y);
    this.cells[x][y] = true;
  }
  setCellVacant(x, y) {
    validateCoordinates.call(this, x,y);
    this.cells[x][y] = false;
  }
}

export default Grid;
