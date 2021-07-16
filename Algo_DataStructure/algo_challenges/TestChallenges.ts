/**
 * Use this class to excute all the test related to the challenges.
 *
 *
 */

import { fibonacci } from "./Fibonacci";
import { FizzBuzz } from "./FizzBuzz";
import { checkPalindrome } from "./palindrome";
import { primeNumberBetween } from "./PrimeNumber";

// const start = 0;
// const end = 10;

// console.log(primeNumberBetween(start, end));

// console.log(checkPalindrome("koyak"));
// console.log(checkPalindrome("A Cuba anna a bu ca"));
const testNumber = 6

for (let index = 0; index <= testNumber; index++) {
    
    console.log(fibonacci(index));
}

// for (let index = 0; index < 35; index++) {
//   console.log(FizzBuzz(index));
// }
