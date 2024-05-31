function analyzeArray(arr) {
  let avg = findAverage(arr);
  let mx = Math.max(...arr);
  let mn = Math.min(...arr);
  return {
    average: avg,
    min: mn,
    max: mx,
    length: arr.length,
  };
}
function findAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

module.exports = analyzeArray;
