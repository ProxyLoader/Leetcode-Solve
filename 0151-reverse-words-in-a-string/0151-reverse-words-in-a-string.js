/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let finalStr = [];
    let abnoramlString = [];
    let lastString = "";
    finalStr = s.split(" ")
    finalStr = finalStr.reverse();;

    for(let i = 0; i < finalStr.length; i++){
        if(finalStr[i] !== ""){
            abnoramlString.push(finalStr[i]);
        }
    }

    for(let i = 0; i< abnoramlString.length; i++){
        lastString += abnoramlString[i] + " ";
    }

    return lastString.trim();
};