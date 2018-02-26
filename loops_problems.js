// factorial

let n = 6;
let result = 1;

for (let i = n; i >= 1; i--) {
  result *= i;
}

console.log(result); //prints the factorial of n



sum of odd numbers

let x = 100;
let sum = 0;

for (let i = 0; i < x; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}

console.log(sum); //print the sum of odd numbers in range 0 to x



number of digits

let number = 123456789;
let numberOfDigits = 0;

while (number !== 0) {
  number = Math.floor(number / 10);
  numberOfDigits++;
}

console.log(numberOfDigits); // print the number of digits of number



product of digits

let num = 456;
let product = 1;

while (num !== 0) {
  product *= num % 10;
  num = Math.floor(num / 10);
}

console.log(product); //prints the product of digits of num