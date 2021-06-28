import { LinkedNode } from "../Node/Node";

//source : https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b
export class Deque<T> {
    private _first : LinkedNode<T>;
    private _last : LinkedNode<T>;
    

    constructor(){
        //TODO: create Deque
        console.log('Deque consfructor');   
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
     * Check if the Deque is empty if empty.
     */
    public isEmpty():boolean{
        throw new Error('This function has to be implemented');
    }

     //FIXME: O(?)
    /**
     * Return Size, number of element of the deque.
     */
    public size():number{
        throw new Error('This function has to be implemented');   
    }


     //FIXME: O(?)
    /**
     * This method returns the end element of the Deque
     */
    public PeekFront(): T {
        throw new Error('This function has to be implemented');  
    }


     //FIXME: O(?)
    /**
     * This method returns the end element of the Deque
     */
     public PeekBack(): T {
        throw new Error('This function has to be implemented');  
    }


    //FIXME: O(?)
    /**
     *  Insert an element at the front of the Deque.
     */
     public AddFront(): T {
        throw new Error('This function has to be implemented');  
    }

      //FIXME: O(?)
    /**
     *  Remove an element from the front and return the newly removed value
     */
     public RemoveFront(): T {
        throw new Error('This function has to be implemented');  
    }


    //FIXME: O(?)
    /**
     *  Insert an element at the back of the Deque.
     */
     public AddBack(): T {
        throw new Error('This function has to be implemented');  
    }



      //FIXME: O(?)
    /**
     *  Remove an element from the back and return the newly removed value
     */
     public RemoveBack(): T {
        throw new Error('This function has to be implemented');  
    }




}