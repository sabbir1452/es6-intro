const person = "Adam Sandler";
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine =
  "First Line text \n" +
  "second line of code \n" +
  "Third line of code \n" +
  "Fourth line of string \n";
// console.log(multiLine);

const newMultiLine = `First Line of text
second Line of text
third line of string
fourth line of code`;

// console.log(newMultiLine);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444];
const summary = "sum of: " + a + " and " + b + " is " + (a + b);

// console.log(summary);

const newSummary = `sum of ${nums.length} and ${nums.length} is: ${a + b}`;
console.log(newSummary);
