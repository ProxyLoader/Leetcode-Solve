/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const list = [];
    for (let i = left; i <= right; i++) {
        const asStr = i.toString().split("").map((v) => Number(v));
        let isDivisble = true;
        if (asStr.includes(0)) continue;
        for (let j = 0; j < asStr.length; j++) {
            if (i % asStr[j] !== 0) {
                isDivisble = false;
                break;
            }
        }
        if(isDivisble){
          list.push(i);
        }
    }
    return list;
};