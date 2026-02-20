/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let results = [];
    function backtrack(start, path){
        results.push([...path])

        for(let i = start; i < nums.length; i++){
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return results;
}
console.log(subsets([1, 2, 3]))
