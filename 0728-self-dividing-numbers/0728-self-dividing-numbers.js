var selfDividingNumbers = function(left, right) {
    const res = [];

    for (let i = left; i <= right; i++) {
        const s = i.toString();
        if (!s.includes('0') && [...s].every(d => i % d === 0)) {
            res.push(i);
        }
    }

    return res;
};