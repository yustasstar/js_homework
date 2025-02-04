
function pow(x, y) {
    let result = 1;
    for (let i = 1; i <= y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 3)); // 8
console.log(pow(3, 4)); // 81
console.log(pow(5, 3)); // 125