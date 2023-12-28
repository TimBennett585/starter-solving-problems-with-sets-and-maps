/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  if (Array.isArray(A)) {
    let numbers = new Map();
    let solution = new Map();

    for (let i = 0; i < A.length; i++) {
      numbers.set(A[i], A[i]);
    }

    for (let i = 0; i < A.length; i++) {
      let diff = N - A[i];
      if (diff !== A[i]) {
        if (numbers.has(diff)) {
          solution.set(Math.min(A[i], diff), Math.max(A[i], diff));
        }
      }
    }

    let result = [...solution];
    return result;
  }

  return [];
}

module.exports = sumPairs;
