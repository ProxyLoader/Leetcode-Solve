/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squaredArray = [];
    nums.forEach((element, index) => squaredArray.push( Math.pow(element, 2) ));
    return squaredArray.sort((a,b) => a-b);
};
