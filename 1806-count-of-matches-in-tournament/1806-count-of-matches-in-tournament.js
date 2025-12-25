/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let matches = 0;
  let advancers = 0;
  let matchesThing = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      matches = n / 2;
      advancers = n / 2;
      n = advancers;
      matchesThing += matches;
    } else {
      matches = Math.trunc(n / 2);
      advancers = Math.round(n / 2);
      n = advancers;
      matchesThing += matches;
    }
  }
  return matchesThing;
};
