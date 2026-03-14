/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i = 0; i < operations.length; i++){
        const op = operations[i];
        if(op.startsWith("++") || op.endsWith("++")) {
            x++;
        }
        if(op.startsWith("--") || op.endsWith("--")) {
            x--;
        }
    }
    return x;
};