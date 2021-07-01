/**
 * The purpose of this class is to implement https://github.com/mirahi-io/hc-js-lodash-es6 into ts
 */

export class LodashCopy{
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * @param array 
     * @param size 
     */
    static chunk(array: any[],  size?: number):any[][]{
        throw new Error('function to be implemented');
    }


    /**
     * Creates an array with all falsey values removed
     * @param array 
     */
    static compact(array: any []):any[]{
        throw new Error('function to be implemented');
    }

    /**
     * Creates a slice of array with n elements dropped from the beginning.
     * @param array 
     * @param n 
     */
    static drop(array: any[], n?: number){
        throw new Error('function to be implemented');
    }

    /**
     * Flattens array a single level deep.
     * @param array 
     */
    static flatten(array: any[]):void{
        throw new Error('function to be implemented');
    }

    /**
     * Recursively flatten array up to depth times.
     * @param array 
     * @param depth 
     */
    static flattenDepth(array: any[], depth? : number){
        throw new Error('function to be implemented');
    }

    /**
     * Gets all but the last element of array.
     * @param array 
     */
    static initial(array: any[]): any[]{
        throw new Error('function to be implemented');
    }


    /**
     * onverts all elements in array into a string separated by separator.
     * @param array 
     * @param separator   default [separator=','] 
     */
    static join(array:any[], separator: string): string{
        throw new Error('function to be implemented');
    }

    /**
     * Creates a duplicate-free version of an array, using SameValueZero for equality comparisons, in which only the first occurrence of each element is kept. 
     * The order of result values is determined by the order they occur in the array.
     * @param array 
     */
    static uniq(array: any[]): any[]{
        throw new Error('function to be implemented'); 
    }


    /**
     * Creates an array excluding all given values 
     * @param array 
     * @param values 
     * @returns  Returns the new array of filtered values
     */
    static without(array:any[], ...values):any[]{
        throw new Error('function to be implemented'); 
    }

    

}