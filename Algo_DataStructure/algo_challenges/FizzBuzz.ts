/**
 * Given numbers from 1 to n, the requirement is to print all numbers such that
 * → If the number is divisible by 3, you print Fizz
 * → If the number is divisible by 5, you print Buzz
 * → If the number is divisible by 15, you print FizzBuzz
 * → Else, print the number
 *
 */

export function FizzBuzz(n: number): string {
  // throw new Error('This function is not implemented yet');
  if (n % 3 === 0 && n % 5 === 0) {
    return "FizzBuzz";
  }
  if (n % 3 === 0) {
    return "fizz";
  }
  if (n % 5 === 0) {
    return "buzz";
  }
  return " " + n;
}
