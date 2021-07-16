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



///dessiner sur feuille de papier pour visualiser la chose 

export class DoubleLinkedNode<T>{
     private _previousNode : DoubleLinkedNode<T> | undefined;
     private _nextNode : DoubleLinkedNode<T> | undefined;
     private _value: T;
     
     constructor( value:T, previousNode?: DoubleLinkedNode<T>, nextNode?:DoubleLinkedNode<T>){
        this._previousNode = previousNode;
        this._nextNode = nextNode;
        this._value = value;
     }

     set previous(prevNode: DoubleLinkedNode<T> | undefined) {
        this._previousNode = prevNode;
     }

     get previous():DoubleLinkedNode<T> | undefined {
        return this._previousNode;
     }

     set next(next: DoubleLinkedNode<T> | undefined) {
      this._nextNode = next;
   }

   get next():DoubleLinkedNode<T> | undefined {
      return this._nextNode;
   }

   set value( val : T){
      this._value = val;
   }

   get value(){
      return this._value; 
   }


}