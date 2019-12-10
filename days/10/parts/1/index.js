require('array-flat-polyfill');

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
    x,
    y,
  })));

const asteroids = objects
  .map((row) => row.filter((obj) => obj.hasAsteroid))
  .flat();

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

const isEvenCoordinate = ({ x, y }) => Number.isInteger(x) && Number.isInteger(y);

asteroids.forEach((origin) => {
  asteroids.forEach((asteroid) => {
    const relativeCoordinate = getRelativeCoordinate(origin, asteroid);
    const angle = getAngle(relativeCoordinate);
    console.log(relativeCoordinate);

    // const evenMidpoint = isEvenCoordinate(midPoint);
    // if (evenMidpoint && objects[midPoint.y, midPoint.x].hasAsteroid) {
    //   ;
    // }
  });
});
