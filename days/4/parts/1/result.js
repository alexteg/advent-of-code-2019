const { countPasswords } = require('.');

const MIN_PASSWORD = 193651;
const MAX_PASSWORD = 649729;

console.time('runtime');
console.log(countPasswords(MIN_PASSWORD, MAX_PASSWORD));
console.timeEnd('runtime');
