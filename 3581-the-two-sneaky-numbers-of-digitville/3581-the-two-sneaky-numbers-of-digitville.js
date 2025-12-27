/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  let set = new Set();
  let duplicate = [];
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) duplicate.push(nums[i]);
    set.add(nums[i]);
  }
  set = null;
  return duplicate;
};

