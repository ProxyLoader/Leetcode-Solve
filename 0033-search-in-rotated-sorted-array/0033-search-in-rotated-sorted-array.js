var search = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(target === nums[i]){
            console.log(i)
            return i;
        }
    }  

    return -1;
};