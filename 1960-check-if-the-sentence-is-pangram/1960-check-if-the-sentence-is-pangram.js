var checkIfPangram = function (sentence) {
    const set = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);

    for (const char of sentence) {
        set.delete(char);
    }

    return set.size === 0;
};