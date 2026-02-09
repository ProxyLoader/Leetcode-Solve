/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = new Map();
  let number = 0;
  for(let i = 0; i < stones.length; i++){
    map.set(stones[i], (map.get(stones[i]) || 0) + 1);
  }
  for(let char of jewels){
    if(map.has(char)){
        number += map.get(char);
    }
  }
  return number;
};
