const sortNumerically = (a, b) => a - b;
const generateSequence = (sequence, inclusive) => {
  if (!Array.isArray(sequence)) {
    throw new TypeError('Expected sequence to be array');
  }
  if (sequence.length !== 2) {
    throw new TypeError('Expected sequence array to contain two items');
  }
  let [start, end] = sequence.sort(sortNumerically);
  if (!inclusive) {
    start += 1;
    end -= 1;
  }
  let items = [];
  for (let i = start; i <= end; i++) {
    items.push(i);
  }
  return items;
};

class Range extends Array {
  constructor(fromNumber, toNumber, inclusive = true) {
    super(...generateSequence([fromNumber, toNumber], inclusive));
  }
}

module.exports = Range;
