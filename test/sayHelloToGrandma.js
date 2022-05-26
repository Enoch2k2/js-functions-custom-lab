var expect    = require("chai").expect;
var { sayHelloToGrandma } = require("../index.js")


describe("sayHelloToGrandma()", function() {
  it("Function Exist", function() {
    expect(typeof(sayHelloToGrandma)).to.equal('function')
  })

  it("returns 'Huh? Speak up!' if you pass in a string in all lowercase", function() {
    let value = sayHelloToGrandma('can you hear me?')
    expect(value).to.equal('Huh? Speak up!');
  })
  
  it("return 'Not since 1939!' if you pass in a string in all uppercase", function() {
    let value = sayHelloToGrandma('CAN YOU HEAR ME?')
    expect(value).to.equal('Not since 1939!');
  })

  it("return 'I love you too!' if the pass in a string in all mixedcase", function() {
    let value = sayHelloToGrandma('I love you grandma')
    expect(value).to.equal('I love you too!');
  })
})