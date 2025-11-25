function applyOperation(numbers, operation) {
    let result = [];
    for (let n of numbers) {
        result.push(operation(n));
    }
    return result;
}

let nums = [1, 2, 3, 4];

let doubled = applyOperation(nums, function(n) {
    return n * 2;
});
console.log("Doubled:", doubled);

let squared = applyOperation(nums, function(n) {
    return n * n;
});
console.log("Squared:", squared);
