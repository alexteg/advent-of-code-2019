const consecutiveDigits = (digits) => digits.some((digit, index) => (
  index !== 0 && digit === digits[index - 1])
);
const increasingDigits = (digits) => digits.every((digit, index) => (
  index === 0 || digit >= digits[index - 1])
);
const passwordCriteriaArray = (digits) => increasingDigits(digits) && consecutiveDigits(digits);
const passwordCriteriaNumber = (number) => passwordCriteriaArray(Array.from(String(number)).map(Number));

const countPasswords = (minPassword, maxPassword) => {
  let passwordCount = 0;
  for (let i = minPassword; i <= maxPassword; i++) {
    if (passwordCriteriaNumber(i)) {
      passwordCount++;
    }
  }
  return passwordCount;
};

module.exports = {
  passwordCriteriaArray,
  passwordCriteriaNumber,
  countPasswords,
};
