// 'number' + 3 + 3         // "number33"

// Шаг 1: 'number' + 3 -> "number3" (строка остаётся строкой, число приводится к строке)
// Шаг 2: "number3" + 3 -> "number33" (число снова приводится к строке, конкатенация)
console.log('number' + 3 + 3);  

// null + 3             // 3

// Шаг 1: null преобразуется в 0 (арифметическая операция приводит null к числу)
// Шаг 2: 0 + 3 -> 3 (обычное сложение чисел)
console.log(null + 3); 

// 5 && "qwerty"        // "qwerty"                     

// Шаг 1: 5 - truthy значение, проверяем дальше (оператор && проверяет истинность значений)
// Шаг 2: "qwerty" - truthy значение, возвращается последний truthy -> "qwerty"
console.log(5 && "qwerty");

// +'40' + +'2' + "hillel"          // "42hillel"

// Шаг 1: +'40' -> 40 (унарный плюс преобразует строку в число)
// Шаг 2: +'2' -> 2 (унарный плюс преобразует строку в число)
// Шаг 3: 40 + 2 -> 42 (арифметическая операция сложения)
// Шаг 4: 42 + "hillel" -> "42hillel" (конкатенация строки и числа, число превращается в строку)
console.log(+'40' + +'2' + "hillel");

// '10' - 5 === 6       // false

// Шаг 1: '10' - 5 -> 10 - 5 -> 5 (оператор "-" приводит строку к числу)
// Шаг 2: 5 === 6 -> false (строгое сравнение, 5 не равно 6)
console.log('10' - 5 === 6);

// true + false         // 1

// Шаг 1: true -> 1, false -> 0 (булевы значения приводятся к числам)
// Шаг 2: 1 + 0 -> 1 (сложение чисел)
console.log(true + false);

// '4px' - 3        // NaN

// Шаг 1: '4px' не может быть приведено к числу (в строке присутствует текст, не только число)
// Шаг 2: Результат NaN (операция невозможна)
console.log('4px' - 3);

// '4' - 3          // 1

// Шаг 1: '4' -> 4 (строка преобразуется в число)
// Шаг 2: 4 - 3 -> 1 (обычное вычитание)
console.log('4' - 3);

// '6' + 3 ** 0         // "61"

// Шаг 1: 3 ** 0 -> 1 (любое число в степени 0 равно 1)
// Шаг 2: '6' + 1 -> "61" (конкатенация строки и числа, число превращается в строку)
console.log('6' + 3 ** 0);

// 12 / '6'         // 2

// Шаг 1: '6' -> 6 (строка преобразуется в число)
// Шаг 2: 12 / 6 -> 2 (деление чисел)
console.log(12 / '6');

// '10' + (5 === 6)     // "10false"

// Шаг 1: 5 === 6 -> false (строгое сравнение, 5 не равно 6)
// Шаг 2: '10' + false -> "10false" (конкатенация строки и boolean, boolean превращается в строку)
console.log('10' + (5 === 6));

// null == ''           // false

// Шаг 1: null не равно пустой строке, результат false (особенность loose equality в JavaScript)
console.log(null == '');

// 3 ** (9 / 3)         // 27

// Шаг 1: 9 / 3 -> 3 (деление)
// Шаг 2: 3 ** 3 -> 27 (возведение в степень)
console.log(3 ** (9 / 3));

// !!'false' == !!'true'        // true    (исправил)

// Шаг 1: !!'false' -> true (любая непустая строка truthy -> !!true -> !false -> true)
// Шаг 2: !!'true' -> true (любая непустая строка truthy -> !!true -> !false -> true)
// Шаг 3: true == true -> true (сравнение одинаковых значений)
console.log(!!'false' == !!'true');

// 0 || '0' && 1        // 1

// Шаг 1: '0' && 1 -> 1 (оба значения truthy, возвращается последнее)
// Шаг 2: 0 || 1 -> 1 (оператор || выбирает первое truthy значение)
console.log(0 || '0' && 1);


// (+null == false) < 1     // false    (исправил)

// Шаг 1: +null -> 0 (унарный плюс превращает null в число)
// Шаг 2: 0 == false -> true (нестрогое сравнение, false превращается в 0)
// Шаг 3: true < 1 -> false (true преобразуется в 1, 1 < 1 -> false)
console.log((+null == false) < 1); 

// false && true || true        // true

// Шаг 1: false && true -> false (логическое И, false делает результат false)
// Шаг 2: false || true -> true (логическое ИЛИ, выбирается первое truthy значение)
console.log(false && true || true);

// false && (false || true)     // false

// Шаг 1: false || true -> true (логическое ИЛИ, выбирается truthy значение)
// Шаг 2: false && true -> false (логическое И, false делает результат false)
console.log(false && (false || true));

// (+null == false) < 1 ** 5        // false   (исправил)

// Шаг 1: +null -> 0 (унарный плюс превращает null в число)
// Шаг 2: 0 == false -> true (нестрогое сравнение)
// Шаг 3: 1 ** 5 -> 1 (возведение в степень)
// Шаг 4: true < 1 -> false (true становится 1, 1 < 1 -> false)
console.log((+null == false) < 1 ** 5);