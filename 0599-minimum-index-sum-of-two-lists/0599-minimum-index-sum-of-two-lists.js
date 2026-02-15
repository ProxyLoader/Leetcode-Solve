/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = new Map();
    let less;
    let finalSolution = [];

    for(let i = 0; i < list1.length; i++){
        for(let j = 0; j < list2.length; j++){
            if(list1[i] === list2[j]){
                map.set(list1[i], i + j);
            }
        }
    }

    const sortedMap = [...map].sort((a,b) => a[1]  - b[1]);
    less = sortedMap[0][1];
    for(let i = 0; i < sortedMap.length; i++){
        if(sortedMap[i][1] === less){
            finalSolution.push(sortedMap[i][0])
        }
    }
    return finalSolution;

};