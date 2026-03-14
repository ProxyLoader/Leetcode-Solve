/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const split = n.toString().split("").map((element) => Number(element));
    let productSum = 1;
    let sumSum = 0;
    for(let i = 0; i < split.length; i++){
        productSum *= split[i];
    }
    for(let i = 0; i < split.length; i++){
        sumSum += split[i];
    }
    return productSum - sumSum;
};