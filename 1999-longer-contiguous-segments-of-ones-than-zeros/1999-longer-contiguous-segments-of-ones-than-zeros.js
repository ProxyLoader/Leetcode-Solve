/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    const zeros = [];
    const ones = [];
    let zeroCounter = 0;
    let onesCounter = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "1"){
            onesCounter++;
            if(i === s.length - 1){
                ones.push(onesCounter);
            }
        } else {
            ones.push(onesCounter);
            onesCounter = 0;
        }
    }

    for(let i = 0; i < s.length; i++){
        if(s[i] === "0"){
            zeroCounter++;
            if(i === s.length - 1){
                zeros.push(zeroCounter);
            }
        } else {
            zeros.push(zeroCounter);
            zeroCounter = 0;
        }
    }

    return Math.max(...ones) > Math.max(...zeros); 
};
