/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const map = new Map();
    const array = [];
    s1 = s1.split(" ");
    s2 = s2.split(" ")

    for(let i = 0; i < s1.length; i++){
        map.set(s1[i], (map.get(s1[i]) || 0) + 1)
    }
    for(let j = 0; j < s2.length; j++){
        map.set(s2[j], (map.get(s2[j]) || 0) + 1)
    }
    for(const [word, count] of map){
        if(count < 2){
            array.push(word);
        }
    }
    return array;
};