import Robot from './../robot';
import should from 'should';

describe('Robot Model', () => {
  let robot = {};
  let data = {};
  beforeEach(() => {
    data = {
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'n',
      },
      commands: ['L', 'M', 'R'],
    };
    robot = new Robot(data);
  });

  it('should initialize with expected properties', () => {
    robot.should.have.property('name');
    robot.should.have.property('startPos');
    robot.should.have.property('commands');
  });

  it('should initialize currentPos to equal start', () => {
    robot.currentPos.should.eql(data.startPos);
  });
});
