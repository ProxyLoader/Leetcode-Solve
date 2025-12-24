/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let f = [];
    for(let i = 0; i <= n; i++){
        f.push(i.toString(2).replaceAll("0", "").length);
    }
    return f;
};