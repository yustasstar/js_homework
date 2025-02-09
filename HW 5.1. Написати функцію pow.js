function pow(x, y) 
{
    if (y === 0) return 1; // будь-яке число в нульовій степені === 1     
    if (x === 0) return y > 0 ? 0 : "Undefined"; 

    let result = 1;
    let absY = y < 0 ? -y : y;
    
    for (let i = 0; i < absY; i++) {
        result *= x;
    }
    
    return y < 0 ? 1 / result : result; // a^−n = 1 / a^n
}


console.log(pow(0, 0));    // 1
console.log(pow(0, 3));    // 0
console.log(pow(0, -2));   // Undefined
console.log(pow(5, -3));   // 0.008
console.log(pow(2, 0));    // 1
console.log(pow(2, 3));    // 8
console.log(pow(3, 4));    // 81
console.log(pow(-2, 3));   // -8
console.log(pow(-2, 4));   // 16
console.log(pow(-2, -3));  // -0.125
console.log(pow(-2, -4));  // 0.0625