var Grid = require('./../model/grid').default;
var robotFactory = require('./../service/robot_factory').default;
var processMove = require('./../service/move').default;

export default (req, res, next) => {
  const grid = new Grid(req.body.upperX, req.body.upperY);
  const robots = robotFactory(req.body.robots);
  console.log(robots);
  res.json(processMove(grid, robots));
  next();
}
