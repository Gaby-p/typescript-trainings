/**
 * A string is a palindrome if it is read the same from forward or backward.
 * For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
 * Similarly, madam is also a palindrome.
 *
 */

/**
    function to check if the string is palindrome or not
 * @param words 
 */

export function checkPalindrome(words: string): boolean {
  // throw new Error("This function is not implemented yet");
  if(!words){
    return false
  }
 words =  words.toLowerCase().split(" ").join("")
 let arr =  [...words] ;
 const  indiceMax = words.length-1
 for (let index = 0; index < indiceMax/2; index++) {
   const element = words[index];
   const elm2= words[indiceMax - index ]
   console.log("index: " + index + " valeur:" + element)
   console.log("indexB: " + (indiceMax - index) +" valeur " + elm2)
   if(elm2 !== element){
     return false
   }

 }
 return true
  
}
