export class LinkedNode<T> {
     private _previousNode : LinkedNode<T> | undefined;
     private _nextNode : LinkedNode<T> | undefined;
     private _value: T;


     constructor( value:T, previousNode?: LinkedNode<T>, nextNode?:LinkedNode<T>){
        this._nextNode =  nextNode || null;
        this._previousNode = previousNode || null;
        this._value = value;

     }

     set previous(prevNode: LinkedNode<T> | undefined) {
        this._previousNode = prevNode;
     }

     get previous():LinkedNode<T> | undefined {
        return this._previousNode;
     }


     set next(next: LinkedNode<T> | undefined) {
      this._nextNode = next;
   }

   get next():LinkedNode<T> | undefined {
      return this._nextNode;
   }


}