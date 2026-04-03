/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
const set = new Set();
  function s(t) {
    if (t === 1) return true;
    if(set.has(t)) return false;
    let current = t.toString().split("").map((el) => Number(el) ** 2).reduce((element, next) => element + next)
    set.add(t);
    return s(current);
  }
  return s(n);
};
