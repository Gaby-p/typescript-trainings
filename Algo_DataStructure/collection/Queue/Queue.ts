import { CollectionInterface } from "../Collection";
import { LinkedNode } from "../Node/Node";

export class Queue<T> implements CollectionInterface {
  private _first: LinkedNode<T>;
  private _last: LinkedNode<T>;
  private nbreElmnt: number;

  constructor() {
    // create queue
    this.nbreElmnt = 0;
    this._first = new LinkedNode(null);
    this._last = this._first;
  }

  // O(1) pas de boucle, supprime tout d'un coup
  /**
   * Removes all elements from the Set object.
   */
  public clear(): void {
    // throw new Error("This function has to be implemented");
    this.nbreElmnt = 0;
    this._first = new LinkedNode(null);
    this._last = this._first;
  }

  // O(1) pas besoin de parcourir pour voir si c'est vide
  /**
   * Check if the queue is empty if empty.
   */
  public isEmpty(): boolean {
    // throw new Error("This function has to be implemented");
    return !this.nbreElmnt;
  }

  //O(n) besoin de parcourir pour voir la taille de l'elelemnt
  /**
   * Return Size, number of element of the queue
   */
  public size(): number {
    // throw new Error("This function has to be implemented");

    return this.nbreElmnt;
  }

  // O(n) itérer pour voir quel element se trouve a la fin ?
  /**
   * This method returns the first value of the queue
   */
  public front(): T {
    // throw new Error("This function has to be implemented");
    return this._first.value;
  }

  // O(n) itérer pour voir quel element se trouve a la fin ?
  /**
   * This method returns the end element of the queue
   */
  public end(): T {
    // throw new Error("This function has to be implemented");
    return this._last.value;
  }

  //O(1) ? j'ai déjà une fin _last
  /**
   *  Insert an element at the end of the queue.
   * //overkill ?
   */
  public enqueue(elt: T): number {
    // throw new Error("This function has to be implemented");
    //ajouter un noeud a la fin

    //nouveau dernier
    const newNode = new LinkedNode(elt);

    this._last.next = newNode;
    ///changer le pointeur vers le nouveau prochain
    this._last = newNode;
    if (this.isEmpty()) {
      this._first = this._last;
    }
    this.nbreElmnt++;
    return this.nbreElmnt;
  }

  //O(1)
  /**
   *   Remove an element from the front of the queue and return the newly removed value
   */
  public dequeue(): number {
    // throw new Error("This function has to be implemented");
    this._first = this._first.next;
    this.nbreElmnt--;
    return this.nbreElmnt;
  }

  //utiliser while pr parcourir liste chainée idéalement
  public toString(): string {
    let toReturn = "";
    let currentNode = this._first;
    for (let index = 0; index < this.nbreElmnt; index++) {
      const element = currentNode.value;
      if (element) {
        toReturn += " " + element;
      }
      //déplace le compteur
      currentNode = currentNode.next;
    }
    return toReturn;
  }
}
