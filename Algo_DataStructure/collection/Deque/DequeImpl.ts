
import { DoubleLinkedNode } from "../Node/Node";
import { Deque } from "./Deque";

//source : https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b
export class DequeImpl<T> implements Deque<T> {
    private _first : DoubleLinkedNode<T>;
    private _last : DoubleLinkedNode<T>;
    

    constructor(){
        //TODO: create Deque
        console.log('Deque consfructor');   
    }
   

     //FIXME: O(?)
   
     public clear():void{
        throw new Error('This function has to be implemented');
    }

    //FIXME: O(?)
   
    public isEmpty():boolean{
        throw new Error('This function has to be implemented');
    }

     //FIXME: O(?)
 
    public size():number{
        throw new Error('This function has to be implemented');   
    }


     //FIXME: O(?)
    
    public PeekFront(): T {
        throw new Error('This function has to be implemented');  
    }

    //FIXME: O(?)
   
     public AddFront(): T {
        throw new Error('This function has to be implemented');  
    }

      //FIXME: O(?)
    
     public RemoveFront(): T {
        throw new Error('This function has to be implemented');  
    }


    //FIXME: O(?)
    
     public PeekBack(): T {
        throw new Error('This function has to be implemented');  
    }

    //FIXME: O(?)
   
     public AddBack(): T {
        throw new Error('This function has to be implemented');  
    }


      //FIXME: O(?)
    RemoveBack(): T {
        throw new Error("Method not implemented.");
    }





}