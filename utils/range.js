class InvalidArguments extends Error {}

const sortNumerically = (a, b) => a - b;
const generateSequence = (sequence) => {
  if (!Array.isArray(sequence)) {
    throw new TypeError('Expected sequence to be array');
  }
  if (sequence.length !== 2) {
    throw new TypeError('Expected sequence array to contain two items');
  }
  const [start, end] = sequence.sort(sortNumerically);
  let items = [];
  for (let i = start; i <= end; i++) {
    items.push(i);
  }
  return items;
};

class Range extends Array {
  constructor(...args) {
    let items;
    switch (args.length) {
      case 1:
        // "1,4,6-9"
        if (typeof args[0] === string) {
          items = [...new Set(
            args[0]
              .split(',')
              .map((step) => step.includes('-') ? generateSequence(step.split('-').map(Number)) : Number(step))
              .flat()
              .sort(sortNumerically)
          )];
        }
        break;
      // 7, 11
      break 2:
        const fromNumber = args[0];
        const toNumber = args[1];
        if (typeof fromNumber === 'number' && typeof toNumber === 'number') {
          items = generateSequence([fromNumber, toNumber]);
        }
        break;
      default:
        throw new InvalidArguments();
    }
    super(...items);
  }
}
