const assert = require('assert');
const { passwordCriteriaNumber } = require('../days/4/parts/1');

describe('Day 2: 1202 Program Alarm', function() {
  describe('Part 1', function() {
    it('Example 1', function() {
      const result = passwordCriteriaNumber(111111);
      assert.equal(result, true);
    });

    it('Example 2', function() {
      const result = passwordCriteriaNumber(223450);
      assert.equal(result, false);
    });

    it('Example 3', function() {
      const result = passwordCriteriaNumber(123789);
      assert.equal(result, false);
    });
  });
});
