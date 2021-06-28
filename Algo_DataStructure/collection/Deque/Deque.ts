export interface Deque<T>{
    
     /**
     * Removes all elements from the Set object.
     */
    clear():void;
    
     /**
     * Check if the Deque is empty if empty.
     */
    isEmpty():boolean;

    /**
     * Return Size, number of element of the deque.
     */
    size():number;

    /**
     * This method returns the end element of the Deque
     */
    PeekFront(): T;

     /**
     *  Insert an element at the front of the Deque.
     */
    AddFront(): T;

    /**
     *  Remove an element from the front and return the newly removed value
     */
    RemoveFront(): T;

    /**
     * This method returns the end element of the Deque
     */
    PeekBack(): T;

     /**
     * Insert an element at the back of the Deque.
     */
    AddBack(): T;

    /**
     *  Remove an element from the back and return the newly removed value
     */
    RemoveBack(): T;
}