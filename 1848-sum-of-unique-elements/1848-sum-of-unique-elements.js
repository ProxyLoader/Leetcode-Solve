/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map();
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    const set = new Set();
    for(const [key, value] of map){
        if(value > 1) continue;
        sum += key;
    }
    return sum;
};