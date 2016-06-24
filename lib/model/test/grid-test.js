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

  it('should upper right isCellOccupied return false when grid first initialized', () => {
    grid.isCellOccupied(5, 7).should.eql(false);
  });

  it('should isCellOccupied handle out of bounds', () => {
    should.throws(() => grid.isCellOccupied(x+1,y));
  });

  it('should setCellOccupied set cell as occupied', () => {
    grid.setCellOccupied(1,3);
    grid.cells[1][3].should.eql(true);
  });

  it('should setCellOccupied handle out of bounds', () => {
    should.throws(() => grid.setCellOccupied(x+1,y));
  });

  it('should setCellVacant set cell as occupied', () => {
    grid.setCellVacant(1,3);
    grid.cells[1][3].should.eql(false);
  });

  it('should setCellVacant handle out of bounds', () => {
    should.throws(() => grid.setCellVacant(x+1,y));
  });
});
