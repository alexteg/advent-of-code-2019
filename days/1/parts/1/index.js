const getModuleFuel = (mass) => Math.floor(mass / 3) - 2;
const getModulesFuel = (masses) => masses.map(getModuleFuel);
const getModulesFuelSum = (masses) => getModulesFuel(masses).reduce((a, b) => a + b, 0);

module.exports = {
  getModuleFuel,
  getModulesFuel,
  getModulesFuelSum,
};
