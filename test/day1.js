const assert = require('assert');
const { getModuleFuel } = require('../days/1/parts/1');

describe('Day 1: The Tyranny of the Rocket Equation', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      const result = getModuleFuel(12);
      assert.equal(result, 2);
    });

    it('Example 2', function() {
      const result = getModuleFuel(14);
      assert.equal(result, 2);
    });

    it('Example 3', function() {
      const result = getModuleFuel(1969);
      assert.equal(result, 654);
    });

    it('Example 4', function() {
      const result = getModuleFuel(100756);
      assert.equal(result, 33583);
    });
  });
});
