/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set =  [...new Set(nums)]
    set = set.sort((a,b) => b - a);
    if(set.length < 3) return Math.max(...set);
    return set[2];    
};
