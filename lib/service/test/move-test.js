import proxyquire from 'proxyquire';
import should from 'should';
import {stub} from 'sinon';
const noop = function () {};


describe('Move Service', () => {
  let robos;
  let grid = {};
  let processBoard;
  let commands;

  beforeEach(() => {
    robos = [
      {currentPos: {x:1, y:0, orientation: "N" }, commands: ['M']},
    ];
    grid = stub({
      cells: [[false, false], [false, false]],
      setCellOccupied: noop,
      isCellOccupied: noop,
      setCellVacant: noop,
    });
    commands = stub({rotate: noop, changePosition: noop});
    commands.rotate.returns();
    commands.changePosition.returns(robos[0].currentPos);
    processBoard = proxyquire('./../move', {'./../model/command': commands}).default;

  });

  it('processBoard should be a function', () => {
    (typeof processBoard === 'function').should.eql(true);
  });

  it('processBoard return the same nubmer of robots as it accepts', () => processBoard(grid, robos).length.should.eql(robos.length));

  it('processBoard should use grid to set 1,0 as occupied in example grid when initializing', () => {
    processBoard(grid, robos);
    grid.setCellOccupied.getCall(0).args.should.eql([1, 0]);
  });

  it('processBoard should call changePosition when command is M', () => {
    processBoard(grid, robos);
    commands.changePosition.calledOnce.should.eql(true);
  });

  it('processBoard should call rotate when command is L', () => {
    robos[0].commands = ['L'];
    processBoard(grid, robos);
    commands.rotate.calledOnce.should.eql(true);
  });

  it('processBoard should call rotate when command is R', () => {
    robos[0].commands = ['R'];
    processBoard(grid, robos);
    commands.rotate.calledOnce.should.eql(true);
  });


  it('processBoard should not return robo position out of grid x bounds', () => {
    grid.upperX = 1;
    commands.changePosition.returns({x: 10, y:1, orientation: 'N'});
    const robosFinal = processBoard(grid, robos);
    robosFinal[0].currentPos.x.should.eql(1);
  });

  it('processBoard should not return robo position out of grid y bounds', () => {
    grid.upperY = 1;
    commands.changePosition.returns({x: 0, y:10, orientation: 'N'});
    const robosFinal = processBoard(grid, robos);
    robosFinal[0].currentPos.y.should.eql(1);
  });

  it('processBoard should not setCelVacant if the destination is occupied', () => {
    grid.isCellOccupied = function (x, y) {
      if (x ===1 && y === 1) {
        return true;
      }
    }
    commands.changePosition.returns({x: 1, y:1, orientation: 'N'});
    const robosFinal = processBoard(grid, robos);
    grid.setCellVacant.notCalled.should.eql(true);
  });

});
