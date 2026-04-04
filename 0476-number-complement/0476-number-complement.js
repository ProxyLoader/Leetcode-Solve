/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = num.toString(2);
    let finalNum = "";
    for(let i = 0; i < binary.length; i++){
        switch (binary[i]) {
            case "0":
                finalNum += "1";
                break;
                case "1":
                    finalNum += "0";
                    break;
        }
    }
    return parseInt(finalNum, 2);
};