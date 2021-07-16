/**
 * A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers (not 1 or 0)
 */

//TODO: O(n) car je dois parcourir  ?
/**
 * find all the prime number between a range of number between start and end (both included).
 * If one this params are negatifs an error will be trown.
 * @param start
 * @param end
 */

export function primeNumberBetween(start: number, end: number): void {
  // throw new Error('this function should be implemented');
  ///Boucle pour parcourir du start au end
  for (let i = start; i < end; i++) {
    console.log("i ici", i);
    let prem = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prem = false;
        break;
      }
    }
    if (prem && i > 1) {
      console.log("premier", i);
    }
  }
}
