/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const last = [];
    for(let i = 0; i < arr.length; i++){
        last.push(fn(arr[i], i))
    }
    return last;
};
