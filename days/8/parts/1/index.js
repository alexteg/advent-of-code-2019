const spaceImageFormatData = require('../../input');

const WIDTH = 25;
const HEIGHT = 6;

const chunk = (array, chunks) => {
  const result = [];
  let i = 0;
  while (i < array.length) {
    result.push(array.slice(i, i += chunks));
  }
  return result;
};
const getImagePixels = (width, height) => width * height;
const getLayers = (data, layerPixels) => chunk(Array.from(data).map(Number), layerPixels);
const countNumbers = (number, arr) => arr.filter((item) => item === number).length;

const layerPixels = getImagePixels(WIDTH, HEIGHT);
const layers = getLayers(spaceImageFormatData, layerPixels);
const layerZeros = layers.map(layer => ({
  layer,
  zeroCount: countNumbers(0, layer),
}));
layerZeros.sort((a, b) => a.zeroCount - b.zeroCount);
const layerFewestZeros = layerZeros[0].layer;
const digitOneCount = countNumbers(1, layerFewestZeros);
const digitTwoCount = countNumbers(2, layerFewestZeros);

// console.log(digitOneCount * digitTwoCount);

const COLOR_MAPPING = ['█', ' ', 'x'];
const COLORS = {
  BLACK: 0,
  WHITE: 1,
  TRANSPARENT: 2,
};

const drawLayer = (layer, width) => {
  const coloredLayers = layer.map(pixel => COLOR_MAPPING[Number(pixel)]);
  const rows = chunk(coloredLayers, width);
  rows.map(row => console.log(row.join('')));
}

// drawLayer(layers[0], WIDTH);

const mergedLayers = [...layers[0]];

layers.forEach(layer => layer.forEach((pixelColor, index) => {
  const existingPixelColor = mergedLayers[index];
  if (existingPixelColor === COLORS.TRANSPARENT) mergedLayers[index] = pixelColor;
}));

drawLayer(mergedLayers, WIDTH);

// module.exports = getModulesFuelSum(modulesMasses);
