var expect    = require("chai").expect;
var challenge = require("./challenge.js");

describe("multiply", function() {
  it("is defined", function() {
    expect(challenge.multiply).to.exist
  });

  it("multiples 4 and 7", function () {
    expect(challenge.multiply(4,7)).to.equal(28);
  });

  it("multiples 5 and 12", function () {
    expect(challenge.multiply(5,12)).to.equal(60);
  });
});