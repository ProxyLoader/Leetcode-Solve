/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let d = x.toString().split("").map((el) => Number(el)).reduce((x, y) => x + y);
    if(x % d === 0) return d;
    return -1;
};