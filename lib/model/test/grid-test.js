import Grid from './../grid';
import should from 'should';

describe('Grid Model', () => {
  let grid = {};
  const x = 5;
  const y = 7;
  beforeEach(() => {
    grid = new Grid(x, y);
  });

  it('should initialize grid with x and y as grid upper coordinates', () => {
    grid.upperX.should.eql(x);
    grid.upperY.should.eql(y);
  });

  it('should isCellOccupied return false when grid first initialized', () => {
    grid.isCellOccupied(1,3).should.eql(false);
  })

  it('should isCellOccupied handle out of bounds', () => {
    should.throws(() => grid.isCellOccupied(x+1,y));
  })
});
