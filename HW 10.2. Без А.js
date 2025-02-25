const regexStr = /\b[^Aa]{6,}\b/;
// {6,}  - послідовність з шести або більше символів;
// [^Aa] - які не містять літери «А» (великої або малої)
const testStrings = [
  "Wonderful",
  "Joyful",
  "Happiness",
  "Time",
  "Task",
  "Apple",
  "Beautiful",
  "Amazing",
  "Fantastic",
  "Great",
  "Superb",
  "Excellent",
];

testStrings.forEach((str) => {
  if (regexStr.test(str)) {
    console.log(`${str} - matches`);
  } else {
    console.log(`${str} - does not match`);
  }
});

const matchedStrings = testStrings.filter(str => regexStr.test(str));
console.log(`\nMatched: ${matchedStrings}`);