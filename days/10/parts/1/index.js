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

const maxX = objects.length - 1;
const maxY = objects[0].length - 1;
console.log('rows', maxX);
console.log('columns', maxY);

// const filterByProp = ()

const asteroidsMap = objects
  .map((row) => row.filter((obj) => obj.hasAsteroid))
const asteroids = asteroidsMap.flat();

// const asteroidsMap = [];
// objects.forEach(({
//   hasAsteroid,
//   x,
//   y,
// }) => {
//   if (!asteroidsMap[y]) {
//     asteroidsMap[y] = [];
//   }

//   asteroidsMap[y][x] = hasAsteroid;
// });

// console.log('asteroidsMap', objects);

// const getMidPoint = (a, b) => ({
//   x: (a.x - b.x) / 2,
//   y: (a.y - b.y) / 2,
// });

const getRelativeCoordinate = (a, b) => ({
  x: b.x - a.x,
  y: b.y - a.y,
});

const getAngle = ({ x, y }) => x / y;

const getCoordinatesBetween = (a, b) => {
  let y = b.y;
  while (y < a.y) {
    //
  }
}

const isEvenNumber = (x) => Number.isInteger(x);

const isEvenCoordinate = ({ x, y }) => isEvenNumber(x) && isEvenNumber(y);

const coordinateInBound = ({ x, y }) => x >= 0 && y >= 0 && x <= maxX && y <= maxY;

const hasBlockingAsteroid = (rangeFrom, rangeTo, someFn) => (
  !(new Range(rangeFrom, rangeTo).some(someFn))
);

const asteroidIsVisibleFromOrigin = (asteroid, origin) => {
  if (origin.x === asteroid.x) {
    const rows = new Range(origin.y, asteroid.y);
    const hasBlockingAsteroid = rows.some((y) => objects[origin.x][y].hasAsteroid);
    return !hasBlockingAsteroid;
  } else if (origin.y === asteroid.y) {
    const columns = new Range(origin.x, asteroid.x);
    const hasBlockingAsteroid = columns.some((x) => objects[x][origin.y].hasAsteroid);
    return !hasBlockingAsteroid;
  } else if (Math.abs(origin.x - asteroid.x) === 1 || Math.abs(origin.y - asteroid.y) === 1) {
    return false;
  } else {
    const relativeCoordinate = getRelativeCoordinate(origin, asteroid);
    const angle = getAngle(relativeCoordinate);
    const rows = new Range(origin.y, asteroid.y, false);
    const hasBlockingAsteroid = rows.some((y) => {
      const x = angle * y;
      if (!isEvenNumber(x)) {
        return false;
      }
      if (!coordinateInBound({ x, y })) {
        return false;
      }
      // console.log(angle, x, y);
      return objects[x][y].hasAsteroid;
    });
    return !hasBlockingAsteroid;
  }

  // const evenMidpoint = isEvenCoordinate(midPoint);
  // if (evenMidpoint && objects[midPoint.y, midPoint.x].hasAsteroid) {
  //   ;
  // }
};

asteroids.forEach((origin) => {
  // console.log('pos', origin.x, origin.y, objects[origin.x]);
  asteroids.forEach((asteroid) => {
    // if (!objects[origin.x][origin.y].count) {
    //   objects[origin.x][origin.y].count = 0;
    // }
    objects[origin.y][origin.x].count += asteroidIsVisibleFromOrigin(asteroid, origin);
  });
});

const asteroidsVisibleCount = objects
  .flat()
  .filter((asteroid) => asteroid.count)
  .sort((asteroidA, asteroidB) => asteroidB.count - asteroidA.count);

console.log(asteroidsVisibleCount);
