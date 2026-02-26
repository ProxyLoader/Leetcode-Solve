/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  const x = [...map].sort((a, b) => b[1] - a[1]);
  for(let i = 0; i < x.length; i++){
    for(j = 0; j < x[i].length; j++){
        if(x[i][0] === x[i][1]) return x[i][0];
    }
  }
  return -1;
};