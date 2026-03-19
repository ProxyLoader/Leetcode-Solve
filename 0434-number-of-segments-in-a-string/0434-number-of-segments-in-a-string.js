/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s === "") return 0;
    let arr = s.split(" ");
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "") continue;
        count++;
    }
    return count;
};