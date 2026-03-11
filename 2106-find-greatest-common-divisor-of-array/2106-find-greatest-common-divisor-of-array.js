/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    var gcd = function (a, b) {
        if (!b) {
            return a;
        }

        return gcd(b, a % b);
    }
    
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return gcd(min, max);



};