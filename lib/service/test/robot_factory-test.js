require('babel-core/register');
import proxyquire from 'proxyquire';
import should from 'should';
import sinon from 'sinon';
const Robot = {default: function () { return {isRobot: true}}};
const robotFactory  = proxyquire('./../robot_factory', {'./../model/robot': Robot});


describe('robotFactory Service', () => {

  it('should robotFactory output an array of Robot objects', () => {
    const robos = robotFactory.default([{}, {}]);
    robos[0].isRobot.should.eql(true);
    robos[1].isRobot.should.eql(true);
  });

});
