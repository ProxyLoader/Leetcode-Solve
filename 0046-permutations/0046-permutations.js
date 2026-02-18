/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const results = [];
    const used = new Array(nums.length).fill(false);
    const dfs = (paths) => {
        if(paths.length === nums.length){
            results.push([...paths])
            return;
        }

        for(let i = 0; i < nums.length; i++){
            if(used[i]) continue;
            used[i] = true;
            paths.push(nums[i]);
            dfs(paths);
            paths.pop();
            used[i] = false;
        }
    }

    dfs([]);
    return results;
};