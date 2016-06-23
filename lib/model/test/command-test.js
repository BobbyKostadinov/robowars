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
});
