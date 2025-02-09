function checkProbabilityTheoryInTheRange(countOfGeneratedNumbers, minNumber, maxNumber) {
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 0; i < countOfGeneratedNumbers; i++) {
        let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

        // console.log(randomNumber); //побачиты в консолі випадкові числа від minNumber до maxNumber

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const evenPercentage = (evenCount / countOfGeneratedNumbers) * 100;
    const oddPercentage = (oddCount / countOfGeneratedNumbers) * 100;

    console.log(`Кількість згенерованих чисел: ${countOfGeneratedNumbers}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}% / ${oddPercentage.toFixed(2)}%`);
}

const minNumber = 100;
const maxNumber = 1000;
const countOfGeneratedNumbers = 10000;

checkProbabilityTheoryInTheRange(countOfGeneratedNumbers, minNumber, maxNumber);
