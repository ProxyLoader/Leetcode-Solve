var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (matrix[i][middle] === target) {
        return true;
      }

      if (target > matrix[i][middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return false;
};
