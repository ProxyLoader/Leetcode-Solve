/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const set = new Set([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  let string = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      string += s[i];
    }
  }
  const l = string.split("").reverse().join("");
  return string === l;
};
