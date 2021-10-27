// // 1. Create an array named numbers and store 5 number values in it
// let numbers = [15, 23, 35, 17, 90];

// // 2. Calculate the sum of array items and print it to the console using console.log()
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(`This is ths sum ${sum}`);

// // 3. Calculate the average of array items and print it to the console using console.log()
// let average = 0;
// for (let i = 0; i < numbers.length; i++) {
//   average += numbers[i];
// }
// console.log(`This is the average number ${average / numbers.length}`);

// // 4. Find the highest number in the array and print it to the console using console.log()

// let highestNumber = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > highestNumber) {
//     highestNumber = numbers[i];
//   }
// }
// console.log(`This is ths highestnumber ${highestNumber}`);

// // 5. Find the lowest number in the array and print it to the console using console.log()

// let lowestNumber = numbers.length - 1;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < lowestNumber) {
//     lowestNumber = numbers[i];
//   }
// }
// console.log(`This is ths lowestnumber ${lowestNumber}`);

// // 6. Find the even numbers in the array and print them to the console using console.log()

// let even = [];

// for (number of numbers) {
//   if (number % 2 === 0) {
//     even.push(number);
//   }
// }
// console.log(even);

// // 7. Find the odd numbers in the array and print them to the console using console.log()

// let odd = [];

// for (number of numbers) {
//   if (number % 2 !== 0) {
//     odd.push(number);
//   }
// }
// console.log(odd);

// // 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

// let divideByFive = [];

// for (number of numbers) {
//   if (number % 5 === 0) {
//     divideByFive.push(number);
//   }
// }
// console.log(divideByFive);

// // 9. Log all the element of the array one by one

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // 10. Find all the number in the array that is divisible by 3

// let divideByThree = [];

// for (number of numbers) {
//   if (number % 3 === 0) {
//     divideByThree.push(number);
//   }
// }
// console.log(divideByThree);

let bucket = {
  capacity: "5 Litre",
  customerMessage: function (desiredSize) {
    if (desiredSize > 5) {
      return "This bucket is not large enough for you";
    }
  },
};
console.log(bucket.customerMessage(13));
