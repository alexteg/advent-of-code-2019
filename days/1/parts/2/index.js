const { getModuleFuel } = require('../1');

const getCompoundFuel = (modulesFuel) => modulesFuel.map((fuel) => {
  let additionalFuel = getModuleFuel(fuel);
  while(additionalFuel > 0) {
    fuel += additionalFuel;
    additionalFuel = getModuleFuel(additionalFuel);
  }
  return fuel;
});

module.exports = {
  getCompoundFuel,
};
