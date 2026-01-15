/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var isAnagram = function(word, word2) {
    if(word.length !== word2.length) return false;
    const map = new Map();
    const mapWord = new Map();
    for(let i = 0; i < word.length; i++){  
        map.set(word[i], (map.get(word[i]) || 0) + 1);
    }
    for(let i = 0; i < word2.length; i++){
        mapWord.set(word2[i], (mapWord.get(word2[i]) || 0) + 1);
    }

    for(const [key, value] of map){
        if(mapWord.has(key)){
            if(mapWord.get(key) !== value) return false;
        } else {
            return false;
        }
    }
    return true;
};