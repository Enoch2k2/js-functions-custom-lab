var expect = require("chai").expect;
var { doMath } = require("../index.js")

describe("doMath()", function() {
  it("Function Exist", function() {
    expect(typeof(doMath)).to.equal('function')
  })

  it('returns the sum if given two numbers and a + as arguments', function() {
    const result = doMath(5, 5, '+');
    const result2 = doMath(2, 5, '+');
    expect(result).to.equal(10)
    expect(result2).to.equal(7)
  })

  it('returns the difference if given two numbers and a - as arguments', function() {
    const result = doMath(5, 3, '-');
    const result2 = doMath(10, 3, '-');
    expect(result).to.equal(2);
    expect(result2).to.equal(7);
  })
  
  it('returns the product if given two numbers and a * as arguments', function() {
    const result = doMath(5, 3, '*');
    const result2 = doMath(10, 3, '*');
    expect(result).to.equal(15);
    expect(result2).to.equal(30);
  })

  it('returns the quotient if given two numbers and a / as arguments', function() {
    const result = doMath(6, 3, '/');
    const result2 = doMath(10, 2, '/');
    expect(result).to.equal(2);
    expect(result2).to.equal(5);
  })
})