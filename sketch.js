import { genNoisyShape } from './genNoisyShape.js';

let cnv;
let genBtn;
let saveBtn;
let curveCheckbox;
let nVerticesInput;
let nLinesInput;
let stepSizeSlider;

let curveVertices;

function curveCheckEvent() {
  curveVertices = this.checked();
}

const genShape = () => {
  background(255);

  // TODO: make these user inputs
  const noiseStep = stepSizeSlider.value() / 1000;

  const nVertices = parseInt(nVerticesInput.value(), 10);
  const nSteps = parseInt(nLinesInput.value(), 10);

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

  curveCheckbox = createCheckbox('Curved vertices', true);
  curveCheckbox.changed(curveCheckEvent);
  curveCheckbox.position(0, 50);

  nVerticesInput = createInput(8, 'number');
  nVerticesInput.position(0, 75);
  const nVLabel = createP('number of vertices');
  nVLabel.position(nVerticesInput.x + nVerticesInput.width, 60);

  nLinesInput = createInput(32, 'number');
  nLinesInput.position(0, 100);
  const nLLabel = createP('number of lines');
  nLLabel.position(nLinesInput.x + nLinesInput.width, 85);

  stepSizeSlider = createSlider(1, 25, 8, 1);
  stepSizeSlider.position(0, 125);
  const sliderLabel = createP('step size');
  sliderLabel.position(stepSizeSlider.x + stepSizeSlider.width, 110);

  noFill();
  stroke(0);
  strokeWeight(2);

  genShape();
};

window.draw = () => {

};
