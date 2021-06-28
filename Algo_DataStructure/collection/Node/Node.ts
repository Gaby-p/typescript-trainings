export class LinkedNode<T> {
     private _previousNode : LinkedNode<T> | null;
     private _nextNode : LinkedNode<T> | null;
     private _value: T;


     constructor( value:T, previousNode?: LinkedNode<T>, nextNode?:LinkedNode<T>){
        this._nextNode =  nextNode || null;
        this._previousNode = previousNode || null;
        this._value = value;

     }

}