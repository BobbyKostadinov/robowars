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
  // Conver to positive and in-bounds angles
  if (pos >= 360) {
    pos = 360 - pos
  }
  if (pos < 0) {
    pos = 360 + pos;
  }
  return angleToSymbol[pos];
};

export function changePosition ({x, y, orientation}) {
  let newPos;
  switch (orientation) {
    case "N":
      newPos = {x, y: y+1};
      break;
    case "E":
      newPos = {x: x+1, y};
      break;
    case "S":
      newPos = {x, y: y-1};
      break;
    case "W" :
      newPos = {x: x-1, y};
      break;
    default:
      newPos = {x, y};
  }

  if (newPos.x < 0 || newPos.y < 0) {
    return {x, y, orientation};
  } else {
    return {x: newPos.x, y: newPos.y, orientation};
  }
}
