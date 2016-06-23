import Resource from './../health';
import {stub} from 'sinon';
import should from 'should';
const noop = function() {};


describe('Health Resource', function(){
  let r;
  let req = {}
  let res = {};
  beforeEach(() => {
    res = stub({end: noop});
    r = new Resource();
  });

  it('should have handle property', function(){
    r.should.have.property('handle');
  })

  it('should handle end with ok', function(){
    req.end = (data) => data.should.eql('ok');
    r.handle(req, res);

  })
})
