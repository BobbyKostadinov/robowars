import proxyquire from 'proxyquire';
import {stub} from 'sinon';
import should from 'should';
const noop = function() {};

describe('Move Resource', function(){
  let r;
  let req = {body: {upperX: 5, upperY: 5, robots: {}}};
  let res = {};
  let Grid;
  let move;
  let robotFactory;
  let Resource;
  beforeEach(() => {
    Grid = stub({
      default: (x, y) => {
        //Validate grid constructor usage
        x.should.eql(req.body.upperX);
        y.should.eql(req.body.upperY);
      },
    });
    robotFactory = stub({
      default: (robots) => {
        robots.should.eql(req.body.robots)
      }
    });
    move = stub({
      default: () => {}
    });
    r = proxyquire('./../move', {
      './../model/grid': Grid,
      './../service/robot_factory': robotFactory,
      './../service/move': move,

    }).default;
    res = stub({end: noop, json: noop});
  });
  it('should have handle property', function(){
    (typeof r).should.eql('function');
  })


  it('should call next', function(done){
    r(req, res, done);
  });

  it('should construct grid', function() {
    r(req, res, noop);
    Grid.default.calledOnce.should.eql(true);
  });

  it('should construct robots', function() {
    r(req, res, noop);
    robotFactory.default.calledOnce.should.eql(true);
  });

  it('should processMove', function() {
    r(req, res, noop);
    move.default.calledOnce.should.eql(true);
  });

  it('should return output of move svc', function() {
    move.default.returns({test: true});
    r(req, res, noop);
    const response = res.json.getCall(0).args;

    response[0].should.eql({test: true});
  });

})
