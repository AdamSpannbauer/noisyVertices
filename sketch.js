import { genNoisyShape } from './genNoisyShape.js';

let cnv;
let genBtn;
let saveBtn;

const genShape = () => {
  background(255);

  // TODO: make these user inputs
  const nVertices = 8; // each vertex is a bend in the line
  const nSteps = 32; // each step is a new line
  const noiseStep = 0.01; // how far can the vertices move between each new line
  const curveVertices = true; // should the lines be curvy or pointy

  genNoisyShape(nVertices, nSteps, noiseStep, curveVertices);
};

const saveShape = () => {
  save('noisyVertices.png');
};

window.windowResized = () => {
  cnv.resize(windowWidth, windowHeight);
};

window.setup = () => {
  cnv = createCanvas(windowWidth, windowHeight);

  genBtn = createButton('Generate Shape');
  genBtn.position(0, 0);
  genBtn.mousePressed(genShape);

  saveBtn = createButton('Save/Download');
  saveBtn.position(0, 25);
  saveBtn.mousePressed(saveShape);

  noFill();
  stroke(0);
  strokeWeight(2);
};

window.draw = () => {

};
