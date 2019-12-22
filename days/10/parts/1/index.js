require('array-flat-polyfill');
const Range = require('./range');

const input = `......#.#.
#..#.#....
..#######.
.#.#.###..
.#..#.....
..#....#.#
#..#....#.
.##.#..###
##...#..#.
.#....####`;

const ASTEROID = '#';

const objects = input
  .split('\n')
  .map((row) => row.split(''))
  .map((row, y) => row.map((value, x) => ({
    hasAsteroid: value === ASTEROID,
    count: 0,
    x,
    y,
  })));

const MAX_X = objects.length - 1;
const MAX_Y = objects[0].length - 1;
console.log('rows', MAX_X);
console.log('columns', MAX_Y);

// const filterByProp = ()

const asteroidsMap = objects
  .map((row) => row.filter((obj) => obj.hasAsteroid))
const asteroids = asteroidsMap.flat();

const getRelativeCoordinate = (a, b) => ({
  x: Math.abs(b.x - a.x),
  y: Math.abs(b.y - a.y),
});

const getAngle = ({ x, y }) => x / y;

const isEvenNumber = (x) => Number.isInteger(x);

const isEvenCoordinate = ({ x, y }) => isEvenNumber(x) && isEvenNumber(y);

const coordinateInBound = ({ x, y }) => x >= 0 && y >= 0 && x <= MAX_X && y <= MAX_Y;

const hasAsteroid = ({ x, y }) => objects[y] && objects[y][x] && objects[y][x].hasAsteroid;

const hasBlockingAsteroidStraight = (rangeFrom, rangeTo, someFn) => (
  new Range(rangeFrom, rangeTo, false).some(someFn)
);

const isAdjacent = (a, b) => Math.abs(a - b) === 1;

const asteroidIsVisibleFromOrigin = (asteroid, origin) => {
  if (origin.x === asteroid.x && origin.y === asteroid.y) {
    // Exclude itself
    return false;
  } else if (origin.x === asteroid.x) {
    // seems to work
    return !hasBlockingAsteroidStraight(origin.y, asteroid.y, (y) => objects[y][origin.x].hasAsteroid);
  } else if (origin.y === asteroid.y) {
    // seems to work
    return !hasBlockingAsteroidStraight(origin.x, asteroid.x, (x) => objects[origin.y][x].hasAsteroid);
  } else if (isAdjacent(origin.x, asteroid.x) || isAdjacent(origin.y, asteroid.y)) {
    // seems to work
    return true;
  } else {
    const relativeCoordinate = getRelativeCoordinate(origin, asteroid);
    const angle = getAngle(relativeCoordinate);
    const rows = new Range(origin.y, asteroid.y, false);
    const hasBlockingAsteroid = rows.some((y) => {
      const x = angle * y;
      return hasAsteroid({ x, y });
    });
    return !hasBlockingAsteroid;
  }
};

asteroids.forEach((origin) => {
  asteroids.forEach((asteroid) => {
    const isVisible = asteroidIsVisibleFromOrigin(asteroid, origin);
    if (origin.x === 5 && origin.y === 8) {
      console.log({ x: asteroid.x, y: asteroid.y }, isVisible);
    }
    objects[origin.y][origin.x].count += Number(isVisible);
  });
});

const asteroidsVisibleCount = objects
  .flat()
  .filter((asteroid) => asteroid.count)
  .sort((asteroidA, asteroidB) => asteroidB.count - asteroidA.count);

console.log(asteroidsVisibleCount);
console.log(asteroidsVisibleCount[0].count);
