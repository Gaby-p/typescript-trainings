export class LinkedNode<T> {
   private _nextNode : LinkedNode<T> | undefined;
   private _value: T;


   constructor( value:T, nextNode?:LinkedNode<T>){
      this._nextNode =  nextNode || null;
      this._value = value;

   }


   set value( val : T){
      this._value = val;
   }

   get value(){
      return this._value; 
   }



   set next(next: LinkedNode<T> | undefined) {
    this._nextNode = next;
 }

 get next():LinkedNode<T> | undefined {
    return this._nextNode;
 }


}




export class DoubleLinkedNode<T> extends LinkedNode<T>{
     private _previousNode : LinkedNode<T> | undefined;
     
     constructor( value:T, previousNode?: LinkedNode<T>, nextNode?:LinkedNode<T>){
        super(value,nextNode);
        this._previousNode = previousNode || null;

     }

     set previous(prevNode: LinkedNode<T> | undefined) {
        this._previousNode = prevNode;
     }

     get previous():LinkedNode<T> | undefined {
        return this._previousNode;
     }


}