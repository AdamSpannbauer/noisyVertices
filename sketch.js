let cnv;

window.windowResized = () => {
  cnv.resize(windowWidth, windowHeight);
};

window.setup = () => {
  cnv = createCanvas(windowWidth, windowHeight);

  noFill();
  stroke(0);
  strokeWeight(2);
};

window.draw = () => {
  background(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 100, 100);
};
