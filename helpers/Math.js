const ndarray = require('ndarray');
const gemm = require('ndarray-gemm');
const ops = require('ndarray-ops');
const zeros = require('zeros');
const nrand = require('gauss-random')

// Samples the standard normal distribution, with 0 mean and unit standard
// deviation.
window.Math.nrand = nrand;

// Our sigmoid function that takes in an number and returns a number between 0
// and 1.
window.Math.sigmoid = function ( x ) {
  return 1 / (1 + Math.exp((-x)));
}

// Calculate the derivative sigmoid
window.Math.derivSigmoid = function ( x ) {
  let fx = window.Math.sigmoid(x);
  return fx * (1 - fx);
}

// Mean Squared Error calculation on two arrays of the same shape. (n x 1)
window.Math.meanSquaredError = function ( a, p ) {
  const answers = ndarray(a, [1, a.length]);
  const predictions = ndarray(p, [1, p.length]);

  let result = zeros([1, 1]);
  let buffer = zeros([1, a.length]);

  // Data = answers - predictions
  ops.sub(buffer, answers, predictions);

  // Data ** 2
  gemm(result, buffer, buffer.transpose(1, 0));

  // Calculate the mean of data
  return result.get(0, 0) / a.length;
}
