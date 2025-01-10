const ratings = [1, 2, 3, 4, 5, 4, 3, 2, 4, 5, 5, 5, 4, 3, 5, 5, 5];





const avgCalc = (ratings) => {
  const total = ratings.reduce((a, b) => a + b);
  return total / ratings.length;
}


const rating = avgCalc(ratings);


console.log(Math.floor(rating));
// 1.Write a function greet that takes a name as a parameter and returns a greeting message.
// 2.Create a function add that takes two numbers as parameters and returns their sum.
// 3.Write a function isEven that checks if a number is even.
// 4.Create a function square that takes a number and returns its square.
// 5.Write a function toUpperCase that takes a string and returns it in uppercase.solve this in js in simple way to learn
//1
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
//2
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8
//3
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
//4
function square(number) {
    return number * number;
}

console.log(square(5)); // Output: 25
//5
function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(toUpperCase("hello")); // Output: HELLO

//Write a function countVowels that counts the number of vowels in a given strin
function countVowels(str) {
    const vowels = "aeiouAEIOU"; // Define all vowels (both uppercase and lowercase)
    let count = 0;

    for (let char of str) { // Loop through each character in the string
        if (vowels.includes(char)) { // Check if the character is a vowel
            count++;
        }
    }

    return count; // Return the count of vowels
}

console.log(countVowels("hello")); // Output: 2
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5

//Write a function sumOfArray that takes an array of numbers and returns their sum using the reduce method.
function sumOfArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0); // Start with 0 and sum up all elements
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumOfArray([10, 20, 30]));    // Output: 60
console.log(sumOfArray([]));              // Output: 0
