import { CollectionInterface } from "../Collection";
import { LinkedNode } from "../Node/Node";

export class Queue<T> implements CollectionInterface {

    private _first : LinkedNode<T>;
    private _last : LinkedNode<T>;
    
    constructor(){
        //TODO: create queue
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
     * Check if the queue is empty if empty.
     */
    public isEmpty():boolean{
        throw new Error('This function has to be implemented');
    }

     //FIXME: O(?)
    /**
     * Return Size, number of element of the queue
     */
    public size():number{
        throw new Error('This function has to be implemented');   
    }


     //FIXME: O(?)
    /**
     * This method returns the end element of the queue
     */
    public Front(): T {
        throw new Error('This function has to be implemented');  
    }


    //FIXME: O(?)
    /**
     *  Insert an element at the end of the queue.
     */
     public Enqueue(): T {
        throw new Error('This function has to be implemented');  
    }


      //FIXME: O(?)
    /**
     *   Remove an element from the front of the queue and return the newly removed value
     */
     public Dequeue(): T {
        throw new Error('This function has to be implemented');  
    }


}