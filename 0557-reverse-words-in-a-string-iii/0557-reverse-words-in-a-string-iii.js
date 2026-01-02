/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ").reverse().join(" ").trimEnd();
    let finalString = "";
    for(let i = s.length - 1; i >= 0; i--){
        finalString += s[i]
    }
    return finalString.trimEnd();
};