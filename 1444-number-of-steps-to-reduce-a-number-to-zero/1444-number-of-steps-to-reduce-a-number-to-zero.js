/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let operation = 0;
    while (num !== 0){
        if(num % 2 === 0){
            num = num / 2;
            operation++;
        } else {
            num -= 1;
            operation++;
        }
    }
    return operation;
};