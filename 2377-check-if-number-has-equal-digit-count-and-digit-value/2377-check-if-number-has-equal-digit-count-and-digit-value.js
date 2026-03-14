/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const map = new Map();
    const map2 = new Map();
    for(let i = 0; i < num.length; i++){
        map.set(i, Number(num[i]));
    }
    for(let i = 0; i < num.length; i++){
        map2.set(num[i], (map2.get(num[i]) || 0) + 1);
    }
    for(const [key, value] of map){
        const freq = map2.get(String(key)) || 0;
        if(value !== freq) return false;
    }
    return true;
};