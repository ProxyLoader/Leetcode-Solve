/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let temp = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1 ){
            counter++;
            if(i === nums.length - 1){
                temp.push(counter);
            }
        } else {
            temp.push(counter);
            counter = 0;
        }
    }
    return Math.max(...temp);
};