/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones = stones.sort((a,b) => b-a);
    while(stones.length > 1){
        const x = stones.shift();
        const y = stones.shift();
        if(x !== y){
            stones.push(x - y);
        }
        stones.sort((a,b) => b-a)
    }
    return stones[0] || 0;
};