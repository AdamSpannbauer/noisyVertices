export const genNoisyShape = (
  nVertices = 8,
  nSteps = 32,
  noiseStep = 0.01,
  curveVertices = true,
) => {
  const border = width * 0.1;

  const vertices = Array.from({ length: nVertices }, () => {
    const seed = { noiseSeed: random(100) };
    return seed;
  });

  for (let i = 0; i < nSteps; i += 1) {
    beginShape();
    vertices.forEach(({ noiseSeed }, vi) => {
      vertices[vi].noiseSeed += noiseStep;

      const xn = noise(noiseSeed);
      const yn = noise(noiseSeed, 42);

      const x = map(xn, 0, 1, border, width - border);
      const y = map(yn, 0, 1, border, height - border);

      if (curveVertices) {
        if (vi === 0 || vi === vertices.length) curveVertex(x, y);
        curveVertex(x, y);
      } else {
        vertex(x, y);
      }
    });
    endShape();
  }
};
