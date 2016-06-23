// Movements angles used to calculate next orientation
const angleToSymbol = {
  0: 'E', 90: 'N',  180: 'W', 270: 'S'
};
const symbolToAngle = {
  'E': 0, 'N': 90, 'W': 180, 'S': 270
};



export function rotate (initialPos, move) {
  let pos = symbolToAngle[initialPos];
  if (move === 'L') {
    pos += 90;
  } else {
    pos -= 90;
  }
  console.log(pos, 'after');
  // Conver to positive and in-bounds angles
  if (pos >= 360) {
    pos = 360 - pos
  }
  if (pos < 0) {
    pos = 360 + pos;
  }
console.log(pos, 'end');
  return angleToSymbol[pos];
};

export function changePosition () {}
