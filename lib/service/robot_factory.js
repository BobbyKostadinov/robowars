// Rever to es5 due to proxyquire and stubbing... alternativelly use dependancy injection
var Robot = require('./../model/robot');

export default (input) => {
  console.log(Robot);
  let robots = [];
  for (let i = 0; i < input.length; i++) {
    robots.push(new Robot(input[i]));
  }
  return robots;
}
