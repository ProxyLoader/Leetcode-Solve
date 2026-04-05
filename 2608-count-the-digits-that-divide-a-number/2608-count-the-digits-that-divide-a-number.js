/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let s = num.toString().split("").map(Number);
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(num % s[i] === 0) {
            count++;
        }
    }
    return count;
};