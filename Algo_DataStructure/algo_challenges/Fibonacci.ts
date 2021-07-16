/**
 * The Fibonacci sequence is a series where the next term is the sum of pervious two terms. 
 * The first two terms of the Fibonacci sequence is 0 followed by 1.
*/


/**
 * print the fibonnacci sequence up to n number of terms
 * @param n
 */
//TODO: in recursive
export function fibonacci(n:number):number{
    // throw new Error('This function is not implemented yet');
    
   
        ////fonctionne mais pas récursif
        // let n1=0;
        // let n2=1;
        // let sum;
        // let i=0;
        // for (i = 0; i < n; i++) 
        // {
        //     sum=n1+n2;
        //     n1=n2;
        //     n2=sum;
        // }
        // console.log(n2);
   
         
        if(n < 2) {
            return n
        }
            return fibonacci(n-1) + fibonacci(n - 2);
        
} 