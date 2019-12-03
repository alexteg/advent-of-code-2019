const assert = require('assert');
const calculateIntcodes = require('../days/2/parts/1');

describe('Day 2: 1202 Program Alarm', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      const result = calculateIntcodes([1,0,0,0,99])
      assert.deepStrictEqual(result, [2,0,0,0,99]);
    });

    it('Example 2', function() {
      const result = calculateIntcodes([2,3,0,3,99])
      assert.deepStrictEqual(result, [2,3,0,6,99]);
    });

    it('Example 3', function() {
      const result = calculateIntcodes([2,4,4,5,99,0])
      assert.deepStrictEqual(result, [2,4,4,5,99,9801]);
    });

    it('Example 4', function() {
      const result = calculateIntcodes([1,1,1,4,99,5,6,0,99])
      assert.deepStrictEqual(result, [30,1,1,4,2,5,6,0,99]);
    });
  });
});
