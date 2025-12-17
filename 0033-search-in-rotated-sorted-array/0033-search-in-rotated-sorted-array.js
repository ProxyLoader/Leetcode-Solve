
var search = function(nums, target){
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], i);
    }
    if(map.has(target)){
        return map.get(target);
    } else {
        return -1;
    }
}
