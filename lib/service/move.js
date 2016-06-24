import {rotate, changePosition} from './../model/command';

export default function processBoard(grid, robots) {
  //Initialize board
  for (let i = 0; i < robots.length; i++) {
    const {x, y} = robots[i].currentPos; console.log(x, y);
    grid.setCellOccupied(x, y);
  }

  for (let i = 0; i < robots.length; i++) {
    robots[i] = moveRobot(grid, robots[i]);
  }
  return robots;
}

// Rerurse though robot's commands until they are exhausted
function moveRobot(grid, robot) {
  if (robot.commands.length === 0) {
    return robot;
  }
  // Take the first element from the commadns array
  const command = robot.commands.shift();
  if (command === 'M') {
    // Process movement on the grid, taking occupancy into account
    // If a space is occupied, command is ignored
    let newPos = robot.currentPos;
    newPos = changePosition(newPos);

    //Double check we are in-bounds for the grid
    if (newPos.x > grid.upperX) {
      newPos.x = grid.upperX;
    }
    if (newPos.y > grid.upperY) {
      newPos.y = grid.upperY;
    }

    //Double check the cell is not already occupied by another robot
    if (grid.isCellOccupied(newPos.x, newPos.y)) {
      newPos = robot.currentPos;
    }

    // Set current and reset past occupancy
    grid.setCellVacant(robot.currentPos.x, robot.currentPos.y);
    grid.setCellOccupied(newPos.x, newPos.y);
    robot.currentPos = newPos;
  } else {
    robot.currentPos.orientation = rotate(robot.currentPos.orientation, command);
  }

  return moveRobot(grid, robot);
}
