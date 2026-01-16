/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var frequencySort = function (string) {
    let finalWord = "";
  const map = new Map();
  for (let i = 0; i < string.length; i++) {
    map.set(string[i], (map.get(string[i]) || 0) + 1);
  }

  const sortedArray = [...map.entries()].sort((a, b) => {
    return b[1] - a[1];
  });

  for(const [char, count] of sortedArray){
    finalWord += char.repeat(count);
  }

  return finalWord;
};

