
// function greet() {
//   console.log('hello jee');
// }
// greet();



// const greet1 = () => {
//   console.log('sello jee');
// }
// greet1();
// const person = 'hari';

// const greet = (personName) => {

// }


// greet('ram');
// function calculateTotal(numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
  
//   // Example usage:
//   const numbers = [10, 20, 30, 40];
//   const total = calculateTotal(numbers);
//   console.log("Total:", total); // Output: Total: 100

const calcTotal = (numbers, age) => {
    return numbers.reduce((a, b) => a + b);
  }
  
  const m = calcTotal([11, 22, 33, 44, 55], 90);
  console.log(m);

  const greetPerson = (personName, greetType) => {
    console.log(`${greetType} ${personName}`);
  }
  
  
  greetPerson('ram', 'hello');
  
  greetPerson('shyam', 'namaste');
// Write a function `addTwoNumbers` that takes two numbers as parameters. How can you return their sum?  
function addtwonumber(a,b){
    return a+b;


}
  console.log(addtwonumber(32,33));

  // How can you write a function called `isEven` that checks if a number is even?  
  function iseven(num){

  return num%2===0;

  }
  console.log(iseven(45));