export interface LinkedList<E>{

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
      * Insert an element at the end of the linked list.
      */
     push():number;

     /**
      * Insert an element at the given index of the linked list;
      * @param index 
      * @param elt 
      */
     insert(index:number, elt:E):void;


     /**
      * Remove the element at the given index of the linked list.
      * @param index 
      */
     removeAt(index:number):E;


     /**
      * Remove the element of the linked list.
      * @param elt 
      */
     remove(elt:E):boolean;

     /**
      * Get the element at the given index of the linked list.
      * @param index 
      */
     getElementAt(index:number):E;

     /**
      *  Return the index of the element in the linked list.
      * @param elt 
      */
     indexOf(elt:E):number;

}