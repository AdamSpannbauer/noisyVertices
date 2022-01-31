export const genNoisyShape = (
  nVertices = 8,
  nSteps = 32,
  noiseStep = 0.01,
  curveVertices = true,
) => {
  const borderX = width * 0.1;
  const borderY = height * 0.1;

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

      const x = map(xn, 0, 1, borderX, width - borderX);
      const y = map(yn, 0, 1, borderY, height - borderY);

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
