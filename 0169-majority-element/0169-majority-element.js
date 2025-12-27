/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let maximum = 0;
  let keyX;
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    map.set(nums[i],  (map.get(nums[i]) || 0) + 1 )
  }  

  for(let [key, value] of map){
    if(maximum < value) {
      maximum = value;
      keyX = key;
    }
  }
  maximum = null;
  map = null;
  return keyX;
};
