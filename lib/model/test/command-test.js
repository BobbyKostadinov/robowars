import {changePosition, rotate} from './../command';
import should from 'should';

describe('Command Model', () => {

  it('should changePosition be a functions', () => (typeof changePosition === 'function').should.eql(true));

  it('should rotate be a functions', () => (typeof rotate === 'function').should.eql(true));

  it('should rotate return one character', () => {
    let rotated = rotate('N');
    (typeof rotated === 'string').should.eql(true);
    rotated.length.should.eql(1);
  });

  it('should rotate left from N to W', () => rotate('N', 'L').should.eql('W'));
  it('should rotate right from N to E', () => rotate('N', 'R').should.eql('E'));
  it('should rotate right from W to N', () => rotate('W', 'R').should.eql('N'));
  it('should rotate right from E to S', () => rotate('E', 'R').should.eql('S'));
  it('should rotate left from E to N', () => rotate('E', 'L').should.eql('N'));
  it('should rotate left from S to E', () => rotate('S', 'L').should.eql('E'));

  it('should y changePosition from 1 to 2 when moving N', () => changePosition({x: 1, y:1, orientation: 'N'}).should.eql({x: 1, y:2, orientation: 'N'}));
  it('should y changePosition from 1 to 0 when moving S', () => changePosition({x: 1, y: 1, orientation: 'S'}).should.eql({x: 1, y:0, orientation: 'S'}));
  it('should y changePosition from 0 to 0 when moving S', () => changePosition({x: 1, y: 0, orientation: 'S'}).should.eql({x: 1, y:0, orientation: 'S'}));

  it('should x changePosition from 1 to 2 when moving E', () => changePosition({x: 1, y: 1, orientation: 'E'}).should.eql({x: 2, y:1, orientation: 'E'}));
  it('should x changePosition from 1 to 0 when moving W', () => changePosition({x: 1, y: 1, orientation: 'W'}).should.eql({x: 0, y:1, orientation: 'W'}));
  it('should x changePosition from 0 to 0 when moving W', () => changePosition({x: 0, y: 1, orientation: 'W'}).should.eql({x: 0, y:1, orientation: 'W'}));

  it('should x changePosition from 2 to 2 when moving NOTVALID', () => changePosition({x: 2, y: 2, orientation: 'NOTVALID'}).should.eql({x: 2, y:2, orientation: 'NOTVALID'}));
});
