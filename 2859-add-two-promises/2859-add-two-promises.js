var addTwoPromises = async function(promise1, promise2) {
    const [value, value2] = await Promise.all([promise1, promise2]);
    return value + value2;
};