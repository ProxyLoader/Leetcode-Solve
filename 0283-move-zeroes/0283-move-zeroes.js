/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const array = new Array(nums.length).fill(0);
  let pos = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
        nums[pos] = nums[i];
        pos++;
    }
  }
  while(pos < nums.length){
    nums[pos] = 0;
    pos++;
  }
};