/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
  const map = new Map();

  for (let v = 0; v < nums.length; v++) {
    if (nums[v] % 2 === 0) {
      map.set(nums[v], (map.get(nums[v]) || 0) + 1);
    }
  }

  for (const [key, value] of map) {
    if (value === 1) return key;
  }
  return -1;
};