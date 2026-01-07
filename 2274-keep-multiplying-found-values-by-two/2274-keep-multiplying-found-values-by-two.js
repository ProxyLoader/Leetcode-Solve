/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  while (nums.includes(original)) {
    console.log(original);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === original) {
        original = original * 2;
      }
    }
  }

  return original;
};