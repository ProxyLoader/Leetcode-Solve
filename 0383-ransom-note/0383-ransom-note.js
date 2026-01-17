/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false;
    const map = new Map();
    for(let i = 0; i < magazine.length; i++){
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1)
    }
    for(let char of ransomNote){
        const count = map.get(char);
        if(!count) return false;
        map.set(char, count - 1);
    }
    return true;
};