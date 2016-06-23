class Robot {
  constructor(options) {
    this.name = options.name;
    this.startPos = options.startPos;
    this.currentPos = options.startPos;
    this.commands = options.movements;
  }
}

export default Robot;
