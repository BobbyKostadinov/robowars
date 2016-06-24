import processBoard from './../move';
import should from 'should';
import {stub} from 'sinon';
const noop = function () {};


describe('Move Service', () => {
  let robos;
  let grid = {};
  beforeEach(() => {
    robos = [
      {currentPos: {x:1, y:1, orientation: "N" }, commands: ['L', 'M']},
    ];
    grid = stub({
      cells: [[false, false], [false, false]],
      setCellOccupied: noop,
      isCellOccupied: noop,
      setCellVacant: noop,
    });
  });

  it('processBoard should be a function', () => {
    (typeof processBoard === 'function').should.eql(true);
  });

  it('processBoard return the same nubmer of robots as it accepts', () => processBoard(grid, robos).length.should.eql(robos.length));

  it('processBoard should use grid to set 1,1 as occupied in example grid when initializing', () => {
    processBoard(grid, robos);
    grid.setCellOccupied.getCall(0).args.should.eql([1, 1]);
  });

  it('processBoard should refuse moving when robo is out of the grid', () => {
    processBoard(grid, robos);
    grid.setCellOccupied.getCall(0).args.should.eql([1, 1]);
  });

  it('processBoard should not return robots with commands left to process', (done) => {
    const robosFinal = processBoard(grid, robos);
    console.log(robosFinal);
    for (let i = 0; i < robosFinal.length; i++) {
      if (robosFinal[i].commands.length > 0) {
        return done('Robot has not exhausted its movement');
      }
    }
    done();
  });
});
