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

class Grid {
  constructor(x,y) {
    this.upperX = x;
    this.upperY = y;
    this.cells = initCells(x, y);
  }
  isCellOccupied(x, y) {
    return this.cells[x][y];
  }
  setCellOccupied(x, y) {
    this.cells[x][y] = true;
  }
  setCellVacant(x, y) {
    this.cells[x][y] = false;
  }
}

export default Grid;
