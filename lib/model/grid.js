function initCells(x, y) {
  let cells = [];
  for (let i = 0; i < x; i++) {
    cells[i] = [];
    for (let j = 0; j < y; j++) {
      cells[i][j] = false;
    }
  }
  return cells;
}
export default class Grid {
  constructor(x,y) {
    this.upperX = x;
    this.upperY = y;
    this.cells = initCells(x, y);
  }
  isCellOccupied(x, y) {
    if (x > this.upperX || y > this.upperY || x < 0 || y < 0) {
      throw Error('Out of bounds');
    }
    return this.cells[x][y];
  }
}
