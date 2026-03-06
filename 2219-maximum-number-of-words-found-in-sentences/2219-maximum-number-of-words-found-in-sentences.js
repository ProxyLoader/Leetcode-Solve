/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count = 0;
    let tempo;
    for(let i = 0; i < sentences.length; i++){
        let temp = sentences[i].split(" ")
        count = Math.max(count, temp.length);
    }
    return count;
};