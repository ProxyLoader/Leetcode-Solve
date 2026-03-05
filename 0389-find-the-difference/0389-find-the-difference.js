var findTheDifference = function(s, t) {
    let xor = 0;

    for (let i = 0; i < s.length; i++) {
        xor ^= s.charCodeAt(i);
    }

    for (let i = 0; i < t.length; i++) {
        xor ^= t.charCodeAt(i);
    }

    return String.fromCharCode(xor);
};