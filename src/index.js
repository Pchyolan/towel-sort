module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix || matrix.length === 0) {
    return [];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    const miniArr = matrix[i];
    if (i % 2 !== 0) {
      miniArr.reverse();
    }
    result.push(...miniArr);
  }

  return result;
};
