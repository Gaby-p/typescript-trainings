export class Set<T>{

    size: number;
    private _elements: T[];

    constructor(){
        this.size = 0;
        this._elements = [];
    }

    //FIXME: O(?)
    /**
     Appends value to the Set object. Returns the Set object with added value.
     * @param value 
     */
    public add(value: T): Set<T>{
        throw new Error('This function has to be implemented');
    }


    //FIXME: O(?)
    /**
     * Removes all elements from the Set object.
     */
    public clear():void{
        throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
    /**
     * Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not.
     * @param value 
     */
    public delete( value: T):boolean{
    throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
    /**
     * Returns a boolean asserting whether an element is present with the given value in the Set object or not.
     * @param value 
     */
    public has(value:T):boolean{
    throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
    /**
     *  Return new Set which contains all the elements from two sets.
     * @param otherSet 
     */
    public union(otherSet: Set<T>):Set<T>{
        throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
    /**
     * Return new Set which contains the intersecting element from two sets.
     * @param otherSet 
     */
    public intersection(otherSet: Set<T>):Set<T>{
        throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
    /**
     * Return new Set only containing the elements which are not present in other sets.
     * @param otherSet 
     */
    public difference(otherSet: Set<T>):Set<T>{
        //FIXME: otherSet._elements, why am i able to do this ?
        throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
    /**
     * Return true if all elements are present in the given otherSet.
     * @param otherSet 
     */
    public isSubset(otherSet: Set<T>):boolean{
        throw new Error('This function has to be implemented');
    }


}