/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    num = num ** 0.5;
    if(num.toString().includes(".")) return false;
    return true;
};