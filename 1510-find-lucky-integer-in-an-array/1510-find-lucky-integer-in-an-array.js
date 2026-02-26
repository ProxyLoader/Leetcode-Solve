/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let unlucky = -1;
  for(const [key, value] of map){
    if(key === value){
        unlucky = Math.max(unlucky, value);
    }
  }
  return unlucky;
};