/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sorted = [];
    let count = 0;
    for(const num of heights) sorted.push(num);
    sorted = sorted.sort((a,b) => a - b)
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] !== heights[i]) count++;
    }
    return count;
};