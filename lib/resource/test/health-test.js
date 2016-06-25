import r from './../health';
import {stub} from 'sinon';
import should from 'should';
const noop = function() {};


describe('Health Resource', function(){
  let req = {}
  let res = {};
  beforeEach(() => {
    res = stub({send: noop});
  });

  it('should have handle property', function(){
    (typeof r).should.eql('function');
  })

  it('should handle end with ok', function(){
    req.end = (data) => data.should.eql('ok');
    r(req, res, noop);
  })
})
