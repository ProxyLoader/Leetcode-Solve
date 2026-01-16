/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubled = s + s;

    const cut = doubled.slice(1, -1);
    return cut.includes(s);
};