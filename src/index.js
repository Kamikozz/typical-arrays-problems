
exports.min = function min(array) {
  if (!arguments.length) return 0;
  if (Array.isArray(array)) {
    if (!array.length) return 0;
    return Math.min.apply(null, array)
  }
  throw new Error('Invalid type of an array argument');
}

exports.max = function max(array) {
  if (!arguments.length) return 0;
  if (Array.isArray(array)) {
    if (!array.length) return 0;
    return Math.max.apply(null, array);
  }
  throw new Error('Invalid type of an array argument');
}

exports.avg = function avg(array) {
  if (!arguments.length) return 0;
  if (Array.isArray(array)) {
    if (!array.length) return 0;
    return array.reduce((prev, curVal) => prev + curVal, 0) / array.length;
  }
  throw new Error('Invalid type of an array argument');
}
