import { LinkedNode } from "../Node/Node";
import { LinkedList } from "./LinkedList";

export class LinkedListImpl<T> implements LinkedList<T> {
  private first: LinkedNode<T>;
  private last: LinkedNode<T>;
  private nombreElmnt: number;
  constructor() {
    this.nombreElmnt = 0;
    this.first = new LinkedNode(null);
    this.last = this.first;
  }

  removeAt(index: number): T {
    throw new Error("Method not implemented.");
  }
  remove(elt: T): boolean {
    // throw new Error("Method not implemented.");
    let previous = this.first;
    let current = this.first;
    console.log(current);
    while (current.value && current.next) {
      console.log("tout et nimp");
      if (current.value == elt) {
        previous = current.next;
        this.nombreElmnt--;
        return true;
      }
      previous = current;
      current = current.next;
    }
    return false;
  }
  clear(): void {
    // throw new Error("Method not implemented.");

    this.nombreElmnt = 0;
    this.first = new LinkedNode(null);
    this.last = this.first;
  }
  isEmpty(): boolean {
    // throw new Error("Method not implemented.");
    // regarde si c'est truthy, si pas ça revient à 0
    // equivaut à this.nombreElmnt === 0
    return !this.nombreElmnt;
  }
  size(): number {
    // throw new Error("Method not implemented.");
    return this.nombreElmnt;
  }
  push(elt: T): number {
    // O(1)
    // throw new Error("Method not implemented.");
    if (this.isEmpty()) {
      this.first.value = elt;
      this.last = this.first;
    } else {
      const newNode = new LinkedNode(elt);
      this.last.next = newNode;
      this.last = this.last.next;
    }
    this.nombreElmnt++;
    return this.nombreElmnt;
  }
  insert(index: number, elt: T): boolean {
    let myNode = this.first
    // throw new Error("Method not implemented.");
    for (let i = 0; i < this.nombreElmnt; i++) {
      const element = myNode;
      if(index == (i+1) ){
        const newNode = new LinkedNode(elt, element.next);
        myNode.next = newNode
        this.nombreElmnt++
        return true
      }
      myNode= myNode.next
    }
    return false
  }

  getElementAt(etage: number): T {
    // throw new Error("Method not implemented.");
    //si pas d'elements -> undifined 
    let myNode= this.first
    //boucle itération
    for (let index = 0; index < this.nombreElmnt; index++) {
        const element = myNode;
        if(index == etage){
          return element.value
        }
        myNode = myNode.next
    } return undefined
  }
  indexOf(elt: T): number {
    // ne pas penser index, penser etage
    // throw new Error("Method not implemented.");
    let myNode= this.first
    //boucle itération
    for (let index = 0; index < this.nombreElmnt; index++) {
        const element = myNode;
        if(element.value == elt){
          return index
        }
        myNode = myNode.next
    } return -1
  }
}
