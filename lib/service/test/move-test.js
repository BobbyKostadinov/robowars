import processBoard from './../move';
import should from 'should';

describe('Move Service', () => {
  let robos;
  beforeEach(() => {
    robos = [
      {commands: ['L', 'M']},
      {commands: ['L', 'M', 'R']}
    ]
  });

  it('processBoard should be a function', () => {
    (typeof processBoard === 'function').should.eql(true);
  });

  it('processBoard return the same nubmer of robots as it accepts', () => {
    const robo = processBoard([], [{}, {}, {}]);
    robo.length.should.eql(3);
  });

  // it('processBoard should not return robots with commands left to process', (done) => {
  //   const robosFinal = processBoard([], robos);
  //   for (let i = 0; i < robosFinal.length; i++) {
  //     if (robosFinal[i].commands.length > 0) {
  //       return done('Robot has not exhausted its movement');
  //     }
  //   }
  //   done();
  // });
});
