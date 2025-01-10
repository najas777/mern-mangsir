//Check if a Number is Even or Odd
// Input: Number to check
let number = 7;

// Check if the number is even or odd
if (number % 2 === 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}

//Write a program to determine if someone is a child, teenager, adult, or senior citizen based on their age
// Input: Age of the person
let age = 12; // You can change this value to test with different ages

// Determine the age category
if (age >= 0 && age <= 12) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else if (age >= 20 && age <= 59) {
  console.log("You are an adult.");
} else if (age >= 60) {
  console.log("You are a senior citizen.");
} else {
  console.log("Invalid age.");
}
//Write a program to check if a given year is a leap year. (Hint: A year is a leap year if it is divisible by 4 but not divisible by 100, except when it is also divisible by 400.)
// Input: Year to check
let year = 2016; // You can change this value to test with other years

// Check if the year is a leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}




//Write a program that takes three numbers as input and determines which one is the largest.
// Input: Three numbers
// Input: Three numbers
let num1 = 45;
let num2 = 78;
let num3 = 32;
let largest; 
if (num1 > num2 && num1 > num3) {
  largest = num1;
} else if (num2 > num1 && num2 > num3) {
  largest = num2;
} else {
  largest = num3;
}

// Display the result
console.log(`The largest number is: ${largest}`);



