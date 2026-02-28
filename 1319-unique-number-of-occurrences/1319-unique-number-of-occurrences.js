/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    let currectValue = 0;
    for(const num of arr){
        map.set(num, (map.get(num) || 0) + 1);
    }
    const seen = new Set();
    for(const [key, value] of map){
        if(seen.has(value)) return false;
        seen.add(value);
    }

    return true;
};
