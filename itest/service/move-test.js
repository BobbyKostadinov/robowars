import should from 'should';
import move from './../../lib/service/move';
import Grid from './../../lib/model/grid';
import robotFactory from './../../lib/service/robot_factory';

describe('Move Service', () => {

  it('shold move within a 5x5 grid with one robot and 1 movement', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'N',
      },
      commands: ['M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(1);
    expectedRobos[0].currentPos.y.should.eql(2);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold rotate within a 5x5 grid with one robot and 1 rotation from E to S using R command', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'E',
      },
      commands: ['R'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.orientation.should.eql('S');
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold rotate within a 5x5 grid with one robot and 1 rotation from S to E using L command', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'S',
      },
      commands: ['L'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.orientation.should.eql('E');
    expectedRobos[0].commands.should.eql([]);
  });


  it('shold move within a 5x5 grid with one robot and 1 rotation to W, then movement', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'N',
      },
      commands: ['L', 'M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(0);
    expectedRobos[0].currentPos.y.should.eql(1);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold not move within a 5x5 grid with one robot at the bottom', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:0,
        orientation: 'S',
      },
      commands: ['M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(1);
    expectedRobos[0].currentPos.y.should.eql(0);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold not move within a 5x5 grid with one robot at top', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:5,
        orientation: 'N',
      },
      commands: ['M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(1);
    expectedRobos[0].currentPos.y.should.eql(5);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold not move within a 5x5 grid with one robot at x bounds', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 5,
        y:5,
        orientation: 'E',
      },
      commands: ['M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(5);
    expectedRobos[0].currentPos.y.should.eql(5);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold not move within a 5x5 grid with invalid orientation', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'NOTVALID',
      },
      commands: ['M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(1);
    expectedRobos[0].currentPos.y.should.eql(1);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold not move within a 5x5 grid with two robots when space is taken', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:2,
        orientation: 'S',
      },
      commands: ['L'],
    },
    {
      name: "Giskard",
      startPos: {
        x: 1,
        y: 1,
        orientation: 'N',
      },
      commands: ['M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[1].currentPos.x.should.eql(1);
    expectedRobos[1].currentPos.y.should.eql(1);
    expectedRobos[0].commands.should.eql([]);
  });

  it('shold move within a 5x5 grid with three robots ', () => {
    const robos = [{
      name: "Daneel",
      startPos: {
        x: 1,
        y:1,
        orientation: 'S',
      },
      commands: ['R', 'M'],
    },
    {
      name: "Giskard",
      startPos: {
        x: 1,
        y: 2,
        orientation: 'S',
      },
      commands: ['M'],
    },
    {
      name: "herbie",
      startPos: {
        x: 3,
        y: 3,
        orientation: 'E',
      },
      commands: ['L', 'M'],
    }];
    const expectedRobos = move(new Grid(5, 5), robotFactory(robos));
    expectedRobos[0].currentPos.x.should.eql(0);
    expectedRobos[0].currentPos.y.should.eql(1);

    expectedRobos[1].currentPos.x.should.eql(1);
    expectedRobos[1].currentPos.y.should.eql(1);

    expectedRobos[2].currentPos.x.should.eql(3);
    expectedRobos[2].currentPos.y.should.eql(4);
  });
});
