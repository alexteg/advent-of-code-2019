let optcode;
let inputPositionA;
let inputPositionB;
let output;

const ADDITION = 1;
const MULTIPLICATION = 2;
const EXIT = 3;

const calculateIntcodes = (ints) => {
  for (i = 0; i <= ints.length; i++) {
    const int = ints[i];
    switch (i % 4) {
      case 0:
        optcode = int;
        if (optcode === EXIT) return ints;
        break;
      case 1:
        inputPositionA = int;
        break;
      case 2:
        inputPositionB = int;
        break;
      case 3:
        output = int;
        if (optcode === ADDITION) {
          ints[output] = ints[inputPositionA] + ints[inputPositionB];
        } else if (optcode === MULTIPLICATION) {
          ints[output] = ints[inputPositionA] * ints[inputPositionB];
        }
        optcode = undefined;
        inputPositionA = undefined;
        inputPositionB = undefined;
        output = undefined;
        break;
    }
  }
  return ints;
};

module.exports = calculateIntcodes;
