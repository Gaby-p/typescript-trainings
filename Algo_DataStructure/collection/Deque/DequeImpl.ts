import { first } from "lodash";
import { DoubleLinkedList } from "../LinkedList/DoubleLinkedList";
import { DoubleLinkedNode } from "../Node/Node";
import { Deque } from "./Deque";

//source : https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b
//contrairement a la liste, que le premier et derneier qui peuvent être affectés
export class DequeImpl<T> implements Deque<T> {
  private _first: DoubleLinkedNode<T>;
  private _last: DoubleLinkedNode<T>;
  private nbreElmnt: number;

  constructor() {
    // create Deque
    console.log("Deque consfructor");
    this.nbreElmnt = 0;
    this._first = new DoubleLinkedNode(null, null, null);
    this._last = this._first;
  }

  // O(1)
  clear(): void {
    // throw new Error("Method not implemented.");
    this.nbreElmnt = 0;
    this._first = new DoubleLinkedNode(null,null,null);
    this._last = this._first;
  }

  //O(1)
  isEmpty(): boolean {
    // throw new Error("Method not implemented.");
    //Pas certaine du falsy comme ça,
    return !this.nbreElmnt;
  }

  // O(1)
  size(): number {
    // throw new Error("Method not implemented.");
    return this.nbreElmnt;
  }

  //O(1) ? car on a un last, pas besoin de faire une itération ?
  PeekFront(): T {
    // throw new Error("Method not implemented.");
    return this._first.value;
  }

  // O(1) car on doit ajouter au first et on l'a déjà ?
  AddFront(elt: T): any {
    // throw new Error("Method not implemented.");
    //Sam
    const newNode = new DoubleLinkedNode(elt);
    //first Emma
    newNode.next = this._first;
    this._first.previous = newNode;
    this._first = newNode;
    // To keep
    if (this.isEmpty()) {
        this._last =this._first;
        this._last.next = null
    }
    this.nbreElmnt++;
    console.log(this.toString()) //FIXME:for test purpose
    return this.nbreElmnt;
  }

  //O(1)
  RemoveFront(): T {
    //throw new Error("Method not implemented.");
    if(this.isEmpty()){
    return null
    }
    const toReturn = this._first.value;
    const previous = this._first.previous;
    this._first = this._first.next;
    this._first.previous = previous 
    console.log(this.toString())
    this.nbreElmnt --
    if(this.size() === 1){
      this._last.previous = previous
    }
    return toReturn;
  }

  //O(1)
  PeekBack(): T {
    //throw new Error("Method not implemented.");
    return this._last.value;
    
  }

  // O(1)
  AddBack(elt: T): any {
    // throw new Error("Method not implemented.");
    //console.log(this.toString()) //FIXME:for test purpose
    ///même que enqueue sauf faire gaffe previous

    ///enqueue
    ///Je veux ajouter Sam derrière Emma donc Sam sera le dernier 
    //et Emma sera la next de sam et sam le previous de Emma
    
    const toReturn = this._last.value;

    ///Sam ici
    const newNode = new DoubleLinkedNode(elt);

    //Emma ici 
    newNode.previous = this._last;
    ///changer le pointeur vers le nouveau prochain
    this._last.next = newNode;
    this._last = newNode;
    if (this.isEmpty()) {
      this._first = this._last;
    }
    this.nbreElmnt++;
    console.log("cc",this.toString());
    return toReturn;
  }

  // O(1)
  RemoveBack(): T {
    // throw new Error("Method not implemented.");
    const toReturn = this._last.value
    const oldNext = this._last.next
    this._last = this._last.previous
    this._last.next = oldNext
    console.log(this.toString()) 
    this.nbreElmnt -- 
    return toReturn
  }

 //utiliser while pr parcourir liste chainée idéalement
 public toString(): string {
  let toReturn = "";
  let currentNode = this._first;
  for (let index = 0; currentNode && index < this.nbreElmnt; index++) {
    const element = currentNode.value;
    if(currentNode.previous){
      toReturn += "<-"
    }

    if (element) {
      toReturn += " " + element;
    }

    if(currentNode.next){
      toReturn += "->"
    }

    
    //déplace le compteur
    currentNode = currentNode.next;
  }

  toReturn+= " \n"
  return toReturn;
}
}
