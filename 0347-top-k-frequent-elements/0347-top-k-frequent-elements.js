/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    const frequency = [];
    let firstCount = 0;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1); 
    }
    const sortedArray = [...map].sort((a,b) => b[1] - a[1])

    for(let j = 0; j < sortedArray.length; j++){
        if(firstCount === k) break;
        frequency.push(sortedArray[j][0]);
        firstCount++;
    }

    return frequency;
};