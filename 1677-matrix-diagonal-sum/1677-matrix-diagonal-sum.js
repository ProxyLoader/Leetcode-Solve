/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let length = mat.length - 1;
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i] + mat[i][length - i]
    }
    if(length % 2 === 0) sum -= mat[length/2][length / 2];
    return sum;
};