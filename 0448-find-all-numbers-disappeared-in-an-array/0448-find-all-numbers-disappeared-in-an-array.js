var findDisappearedNumbers = function(nums) {
    nums.sort((a,b) => a-b);
    let array = [...new Set(nums)];
    let disappearedNumbers = [];
    let n = nums.length;

    // missing before first element
    for (let i = 1; i < array[0]; i++) {
        disappearedNumbers.push(i);
    }

    for (let i = 0; i < array.length - 1; i++) {
        let diff = array[i + 1] - array[i];
        for (let r = 1; r < diff; r++) {
            disappearedNumbers.push(array[i] + r);
        }
    }

    for (let i = array[array.length - 1] + 1; i <= n; i++) {
        disappearedNumbers.push(i);
    }

    return disappearedNumbers;
};
