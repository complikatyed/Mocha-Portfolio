/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});

describe('getStock', function () {
  it('should return a stock object', function () {
    getStock('AAPL').Name.should.equal('Apple Inc');
    getStock('MSFT').Name.should.equal('Microsoft Corp');
  });
});


