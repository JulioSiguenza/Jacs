a = parseInt(prompt("Tell me the first number , please :"));
b = parseInt(prompt("Tell me the second number, please : "));


//Write a java script program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.


const comparativeTo100 = (numberOne, numberTwo) => numberOne === 100 || numberTwo === 100 || (numberOne + numberTwo) === 100;

console.log(comparativeTo100(a, b));
