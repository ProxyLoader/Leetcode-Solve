/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    let sortedArray = strs.map((element) => element.split("").sort().join(""))
    for(let i = 0; i < strs.length; i++){
        if(!hash[sortedArray[i]]){
            hash[sortedArray[i]] = [strs[i]];
        } else {
            hash[sortedArray[i]].push(strs[i]);
        }
    }

    return Object.values(hash)
};