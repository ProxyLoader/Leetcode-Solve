/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morseArray = words.map((str) => convertWordToMorse(str));
  const map = new Map();
  let unique = 0;

  for(let i = 0; i < morseArray.length; i++){
    map.set(morseArray[i], (map.get(morseArray[i] ) || 0 ) + 1)
  }

  for(const [key, value] of map){
    if(value > 1){
        unique++;
    } else if(value === 1){
        unique++;
    }
  }

  console.log(map)
  return unique;
};

function convertWordToMorse(word) {
  let fRep = "";

  const map = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  for (let i = 0; i < word.length; i++) {
    fRep += map[word[i]];
  }

  return fRep;
}