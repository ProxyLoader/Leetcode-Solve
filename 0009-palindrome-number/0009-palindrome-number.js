/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let f = x.toString().split("").reverse().join("");
    if(parseInt(f) === x) return true;
    return false;
};