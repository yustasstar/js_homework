
function pow(x, y) 
{   // Число в нульовій степені === 1
    // Нуль в нульовій степені === 1 (за домовленістю)  
    if (y === 0) {return 1;}      
    
    // В математиці нуль в нульовій степені зазвичай вважається невизначеним. Однак, у програмуванні часто приймають, що 0^0 = 1 для зручності обчислень. Нуль в нульовій степені === undefined (за домовленістю):
        // if (x === 0) {return undefined;}                                       
        // else {return 1;}  
                        
    if (x === 0 && y < 0) { // обробка винятку: на нуль ділити не можна
        return "на нуль ділити не можна";
    }

    let result = 1;
    for (let i = 1; i <= Math.abs(y); i++) {
        result *= x;
    }

    return y > 0 ? result : 1 / result;  // a^−n = 1 / a^n
}

console.log(pow(0, 0));    // 1
console.log(pow(0, 3));    // 0
console.log(pow(0, -2));   // на нуль ділити не можна
console.log(pow(5, -3));   // 0.008
console.log(pow(2, 0));    // 1
console.log(pow(2, 3));    // 8
console.log(pow(3, 4));    // 81
console.log(pow(-2, 3));   // -8
console.log(pow(-2, 4));   // 16
console.log(pow(-2, -3));  // -0.125
console.log(pow(-2, -4));  // 0.0625