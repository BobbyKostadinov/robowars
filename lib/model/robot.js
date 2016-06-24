class Robot {
  constructor(data) {
    this.name = data.name;
    this.startPos = data.startPos;
    this.currentPos = data.startPos;
    this.commands = data.commands;
  }
}

export default Robot;
