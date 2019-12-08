const input = require('../../input');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = (new JSDOM(`<body id="root"></body>`)).window;
const rootNode = document.getElementById('root');

const ROOT_NODE = 'COM';

// const input = `COM)B
// B)C
// C)D
// D)E
// E)F
// B)G
// G)H
// D)I
// E)J
// J)K
// K)L`;

const getOrbitPairs = (text) => text
  .split('\n')
  .map(line => line.split(')'))
  .reduce((orbiters, [obj, orbiter]) => {
    if (orbiters[obj]) {
      orbiters[obj].push(orbiter);
    } else {
      orbiters[obj] = [orbiter];
    }
    return orbiters;
  }, {});

const orbitPairs = getOrbitPairs(input);

const countParentNodes = (node, i = 1) => {
  if (node.parentElement.id === ROOT_NODE) return i;
  return countParentNodes(node.parentElement, i + 1);
};

const addNode = (reference, parentNode, tag = 'span') => {
  const orbiterReferences = orbitPairs[reference];
  const el = document.createElement(tag);
  el.id = reference;
  // console.log(reference, parentNode);
  parentNode.append(el);
  delete orbitPairs[reference];
  if (orbiterReferences) {
    orbiterReferences.forEach((orbiterReference) => {
      addNode(orbiterReference, el);
    });
  }
};

addNode(ROOT_NODE, rootNode, 'div');

const allNodes = Array.from(document.getElementsByTagName('span'));
// console.log(allNodes.length);
const orbitCounts = allNodes.reduce((orbitCount, node) => {
  orbitCount += countParentNodes(node, 1);
  return orbitCount;
}, 0);

// console.log(document.body.outerHTML);
console.log(orbitCounts);
