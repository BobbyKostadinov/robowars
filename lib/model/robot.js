class Robot {
  constructor(data) {
    this.name = data.name;
    this.startPos = data.startPos;
    this.currentPos = {
      x: this.startPos.x,
      y: this.startPos.y,
      orientation: this.startPos.orientation,
    };
    this.commands = data.commands;
  }
}

export default Robot;
