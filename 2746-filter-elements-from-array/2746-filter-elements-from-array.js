/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const last = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      last.push(arr[i]);
    }
  }
  return last;
};
