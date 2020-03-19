module.exports = function towelSort (matrix) {

  let result = [];
  let tempMatrix = [];

  if (!matrix || matrix.length === 0) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        tempMatrix.push(matrix[i]);
      } else {
        tempMatrix.push(matrix[i].reverse());
      }
    }
    for (let i = 0; i < tempMatrix.length; i++) {
      for (let j = 0; j < tempMatrix[i].length; j++) {
        result.push(+tempMatrix[i][j]);
      }
    }
    return result;
  }
};
